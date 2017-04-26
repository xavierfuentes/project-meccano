import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

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

const SignupForm = ({ handleSignup, error, handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit(handleSignup)}>
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
  handleSignup: PropTypes.func.isRequired,
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
})(SignupForm);
