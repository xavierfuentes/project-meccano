import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ input, label, meta: { error, touched }, type }) =>
  <div>
    <label htmlFor={input.name}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>;

FormField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default FormField;
