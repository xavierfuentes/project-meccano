import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { PROFILE_PATH } from '../../data/Auth/constants';

import SigninForm from '../../components/SigninForm';
import { signinRequest } from '../../data/Auth/actions';
import { userIsAuthenticatedSelector } from '../../data/Auth/selectors';

const Signin = ({ handleSignin, isAuthenticated }) => {
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

Signin.propTypes = {
  handleSignin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

Signin.defaultProps = {
  isAuthenticated: false,
};

const mapStateToProps = state => ({
  isAuthenticated: userIsAuthenticatedSelector(state),
});

const mapDispatchToProps = {
  handleSignin: signinRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
