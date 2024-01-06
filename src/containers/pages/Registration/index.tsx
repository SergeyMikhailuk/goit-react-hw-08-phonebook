import { useNavigate } from 'react-router-dom';
import { Formik, Field, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { useCreateUserMutation } from 'store/auth/auth-operations';

import { Form, ErrorMessage, InputWrapper, Input, Button, Link } from './styled';

const initialValues: RegistrationFormInitialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object({
  name: yup.string().required('name is required'),
  email: yup.string().required('email is required'),
  password: yup
    .string()
    .min(8)
    .max(12)
    .typeError('from 8 to 12 symbols')
    .required('password is required'),
});

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [createUser, { isLoading: isCreatingUser }] = useCreateUserMutation();

  const handleSubmit = async (
    values: RegistrationFormInitialValues,
    { resetForm }: FormikHelpers<RegistrationFormInitialValues>
  ) => {
    await createUser(values);
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
            <Field as={Input} type="text" name="name" label={'Name'} autoComplete="off" />
            <ErrorMessage name="name" component="div" />
          </InputWrapper>

          <InputWrapper>
            <Field as={Input} type="text" name="email" label={'Email'} autoComplete="new-email" />
            <ErrorMessage name="email" component="div" />
          </InputWrapper>

          <InputWrapper>
            <Field
              as={Input}
              type="password"
              name="password"
              label={'Password'}
              autoComplete="new-password"
            />
            <ErrorMessage name="password" component="div" />
          </InputWrapper>

          <Button type="submit" disabled={isCreatingUser}>
            Sign Up
          </Button>
        </Form>
      </Formik>

      <Link to={'/login'}>
        <Button type="button" disabled={isCreatingUser}>
          I have an account
        </Button>
      </Link>
    </>
  );
};

export default RegistrationPage;

export type RegistrationFormInitialValues = {
  name: string;
  email: string;
  password: string;
};
