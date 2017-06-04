import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';

import { PROFILE_PATH } from '../../data/Auth/constants';

import SigninForm from '../../components/SigninForm';

const SigninPageLayout = ({ handleSignin, isAuthenticated }) => {
  const handleSigninWithForm = handleSignin;

  const handleSigninWithProvider = event => {
    const provider = event.target.getAttribute('data-provider');
    handleSigninWithForm({ provider });
  };

  return isAuthenticated
    ? <Redirect to={{ pathname: PROFILE_PATH }} />
    : <article>
        Sign In Page

        <div>
          <SigninForm onSubmit={handleSigninWithForm} />
        </div>

        <div>
          <button onClick={handleSigninWithProvider} data-provider="google">Google</button>
        </div>
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
