import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import SigninForm from '../../components/SigninForm';
import { signinRequest } from '../../data/Signin/actions';

const Signin = ({ handleSignin }) => (
  <article>
    Sign In Page

    <div>
      <SigninForm onSubmit={handleSignin} />
    </div>

    <div>
      <button onClick={() => handleSignin({ provider: 'google' })}>Google</button>
    </div>
  </article>
);

Signin.propTypes = {
  handleSignin: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  handleSignin: signinRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
