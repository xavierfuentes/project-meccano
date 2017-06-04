import { reduxForm } from 'redux-form/immutable';

import SignupFormLayout from '../../components/SignupFormLayout/SignupFormLayout';

const validate = values => {
  const errors = {};
  if (!values.get('email')) errors.email = 'Required';
  if (!values.get('password')) errors.password = 'Required';
  return errors;
};

export default reduxForm({
  form: 'signup',
  validate,
})(SignupFormLayout);
