import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, InputWrapper, Input, Error, Button } from '../ContactForm/ContactFormStyles'; 
const validationSchema = yup.object({
  name: yup
    .string()
    .required('Required!')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    }),
  number: yup
    .string()
    .required('Required!')
    .matches(
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        excludeEmptyString: true,
      }
    ),
});

const ContactForm = () => {
  const contacts = useSelector(({ contacts }) => contacts);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit = data => {
    const isDuplicate = contacts.find(contact => contact.name === data.name);
    if (isDuplicate) return alert(`${data.name} is already in contacts.`);

    dispatch(addContact(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <>
              <Input type="text" {...field} placeholder="Name" />
              {errors.name && <Error>{errors.name.message}</Error>}
            </>
          )}
        />
      </InputWrapper>
      <InputWrapper>
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <>
              <Input type="tel" {...field} placeholder="Phone Number" />
              {errors.number && <Error>{errors.number.message}</Error>}
            </>
          )}
        />
      </InputWrapper>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
export default ContactForm;