import React from 'react';
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

const SigninForm = ({ handleSignin, error, handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit(handleSignin)}>
    <Field name="email" type="text" component={renderField} label="Email" />
    <Field name="password" type="password" component={renderField} label="Password" />
    {error && <strong>{error}</strong>}
    <div>
      <button type="submit" disabled={submitting}>Sign In</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </div>
  </form>
);

SigninForm.propTypes = {
  error: React.PropTypes.string,
  handleSignin: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  pristine: React.PropTypes.bool,
  reset: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool,
};

SigninForm.defaultProps = {
  error: null,
  pristine: true,
  submitting: false,
};

export default reduxForm({
  form: 'signup',
})(SigninForm);
