import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';

import FormField from '../FormField/FormField';

const SigninFormLayout = ({ error, handleSubmit, submitting }) =>
  <form onSubmit={handleSubmit}>
    <Field name="email" type="text" component={FormField} label="Email" />
    <Field name="password" type="password" component={FormField} label="Password" />
    {error && <strong>{error}</strong>}
    <div>
      <button type="submit" disabled={submitting}>Sign In</button>
    </div>
  </form>;

SigninFormLayout.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

SigninFormLayout.defaultProps = {
  error: null,
  submitting: false,
};

export default SigninFormLayout;
