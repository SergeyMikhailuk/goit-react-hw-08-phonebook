import styled from '@emotion/styled';
import { Button as MuiButton, TextField } from '@mui/material';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';
import { Link as ReactLink } from 'react-router-dom';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
  margin-top: 4px;
  padding-left: 8px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled(TextField)``;

export const Button = styled(MuiButton)`
  width: 300px;
  display: flex;
  justify-content: flex-start;
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
`;
