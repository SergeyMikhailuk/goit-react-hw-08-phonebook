import { useNavigate } from 'react-router-dom';
import { Formik, Field, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { useLoginUserMutation } from 'store/auth/auth-operations';

import { Form, ErrorMessage, Input, Button, Link, InputWrapper } from './styled';

const initialValues: LoginFormInitialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string().required('email is required'),
  password: yup
    .string()
    .min(8)
    .max(12)
    .typeError('from 8 to 12 symbols')
    .required('password is required'),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();

  const handleSubmit = async (
    values: LoginFormInitialValues,
    { resetForm }: FormikHelpers<LoginFormInitialValues>
  ) => {
    await loginUser(values);
    navigate('/contacts');
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <InputWrapper>
            <Field as={Input} type="text" name="email" label={'Email'} />
            <ErrorMessage name="email" component="div" />
          </InputWrapper>

          <InputWrapper>
            <Field as={Input} type="text" name="password" label={'Password'} />
            <ErrorMessage name="password" component="div" />
          </InputWrapper>

          <Button type="submit" disabled={isLoggingIn}>
            Log In
          </Button>
        </Form>
      </Formik>

      <Link to={'/registration'}>
        <Button type="button" disabled={isLoggingIn}>
          Create new account
        </Button>
      </Link>
    </>
  );
};

export default LoginPage;

export type LoginFormInitialValues = {
  email: string;
  password: string;
};
