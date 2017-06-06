import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import { PROFILE_PATH, SIGNUP_PATH } from '../../data/Auth/constants';

import SigninForm from '../../containers/SigninForm/SigninForm';

const SigninPageLayout = ({ handleSignin, isAuthenticated }) => {
  const handleSigninWithForm = handleSignin;

  const handleSigninWithProvider = event => {
    const provider = event.target.getAttribute('data-provider');
    handleSigninWithForm({ provider });
  };

  return isAuthenticated
    ? <Redirect to={{ pathname: PROFILE_PATH }} />
    : <article>
        Sign in to your account

        <section>
          <button onClick={handleSigninWithProvider} data-provider="google">Google</button>
        </section>

        <span>or</span>

        <section>
          <SigninForm onSubmit={handleSigninWithForm} />
        </section>

        <section>
          Need an account? <Link to={SIGNUP_PATH}>Sign up</Link>
        </section>
      </article>;
};

SigninPageLayout.propTypes = {
  handleSignin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

SigninPageLayout.defaultProps = {
  isAuthenticated: false,
};

export default SigninPageLayout;
