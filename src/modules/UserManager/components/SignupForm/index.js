import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

const validate = values => {
  const errors = {};
  if (!values.get('email')) errors.email = 'Required';
  if (!values.get('password')) errors.password = 'Required';
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  const jsxField = (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );

  return jsxField;
};

const SignupForm = ({ error, handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name="email" type="text" component={renderField} label="Email" />
    <Field name="password" type="password" component={renderField} label="Password" />
    {error && <strong>{error}</strong>}
    <div>
      <button type="submit" disabled={submitting}>Sign Up</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </div>
  </form>
);

SignupForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

SignupForm.defaultProps = {
  error: null,
  pristine: true,
  submitting: false,
};

export default reduxForm({
  form: 'signup',
  validate,
})(SignupForm);
