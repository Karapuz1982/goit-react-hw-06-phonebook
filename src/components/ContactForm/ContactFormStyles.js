import styled from 'styled-components';

export const Form = styled.form`
 display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto; 
`;

export const InputWrapper = styled.div`
 display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Error = styled.p`
color: red;
`;

export const Button = styled.button`
 background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;