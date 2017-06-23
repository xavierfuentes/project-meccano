import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link/Link';
import { PROVIDER_ID_GOOGLE } from '../../helpers/firebase';
import { SIGNUP_ROUTE } from '../../data/routes';

const SigninLayout = ({ handleSignin }) => {
  const handleClickProvider = event => {
    event.preventDefault();
    const provider = event.target.getAttribute('data-provider');
    return handleSignin({ provider });
  };

  return (
    <article>
      Sign in to your account

      <section>
        <button onClick={handleClickProvider} data-provider={PROVIDER_ID_GOOGLE}>Google</button>
      </section>

      <span>or</span>

      <section>
        <code>Signin Form here</code>
      </section>

      <section>
        <a href="/">Forgot password?</a>
        Need an account? <Link name={SIGNUP_ROUTE.name}>Sign up</Link>
      </section>
    </article>
  );
};

SigninLayout.propTypes = {
  handleSignin: PropTypes.func.isRequired,
};

export default SigninLayout;
