import React from 'react';
import { PropTypes } from 'prop-types';
import { firebaseConnect, pathToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';

const Signin = ({ firebase }) => {
  const handleLogin = loginData => {
    firebase.login(loginData);
  };
  const providerLogin = provider => handleLogin({ provider });

  return (
    <article>
      Sign In Page
      <div>
        <button onClick={() => providerLogin('google')}>Google</button>
      </div>
    </article>
  );
};

Signin.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ firebase }) => ({
  auth: pathToJS(firebase, 'auth'),
});

// const mapDispatchToProps = dispatch => ({});
const mapDispatchToProps = null;

const connectedSignIn = firebaseConnect()(Signin);

export default connect(mapStateToProps, mapDispatchToProps)(connectedSignIn);
