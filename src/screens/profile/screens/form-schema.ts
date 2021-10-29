import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Name should contain only letters')
    .required('Enter your name'),
  surname: yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Surname should contain only letters')
    .required('Enter your surname'),
});
