import { string, object, ref } from 'yup';

export const LoginSchema = object({
  email: string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: string().required('Password is Required'),
}).required();

export const RegisterSchema = object({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: string()
    .required('Password is Required')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, Atleast: \nOne Uppercase, \nOne Lowercase, \nOne Number, \nand one special Character',
    ),
  cPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password'), null], 'Passwords must match'),
}).required();
