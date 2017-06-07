import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import SignupForm from '../../containers/SignupForm/SignupForm';

const SignupPageLayout = ({ handleSignup }) =>
  <article>
    Try Us Free

    <section>
      <SignupForm onSubmit={handleSignup} />
    </section>

    <section>
      Already have an account? <Link to="">Sign in</Link>
    </section>
  </article>;

SignupPageLayout.propTypes = {
  handleSignup: PropTypes.func.isRequired,
};

export default SignupPageLayout;
