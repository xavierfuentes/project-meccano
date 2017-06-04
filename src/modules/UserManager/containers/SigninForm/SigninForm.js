import { reduxForm } from 'redux-form/immutable';

import SigninFormLayout from '../../components/SigninFormLayout/SigninFormLayout';

const validate = values => {
  const errors = {};
  if (!values.get('email')) errors.email = 'Required';
  if (!values.get('password')) errors.password = 'Required';
  return errors;
};

export default reduxForm({
  form: 'signin',
  validate,
})(SigninFormLayout);
