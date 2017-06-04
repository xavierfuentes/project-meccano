import React from 'react';
import { PropTypes } from 'prop-types';

import SignupForm from '../../components/SignupForm';

const SignupPageLayout = ({ handleSignin, handleSignup }) =>
  <article>
    Sign Up Page

    <div>
      <SignupForm onSubmit={handleSignup} />
    </div>

    <div>
      <button onClick={() => handleSignin({ provider: 'google' })}>Google</button>
    </div>
  </article>;

SignupPageLayout.propTypes = {
  handleSignin: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
};

export default SignupPageLayout;
