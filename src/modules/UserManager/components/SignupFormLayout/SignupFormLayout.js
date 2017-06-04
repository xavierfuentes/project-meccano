import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';

import FormField from '../FormField/FormField';

const SignupFormLayout = ({ error, handleSubmit, pristine, reset, submitting }) =>
  <form onSubmit={handleSubmit}>
    <Field name="email" type="text" component={FormField} label="Email" />
    <Field name="password" type="password" component={FormField} label="Password" />
    {error && <strong>{error}</strong>}
    <div>
      <button type="submit" disabled={submitting}>Sign Up</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </div>
  </form>;

SignupFormLayout.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

SignupFormLayout.defaultProps = {
  error: null,
  pristine: true,
  submitting: false,
};

export default SignupFormLayout;
