import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { signin } from '../../data/Signin/actions';

const Signin = ({ handleSignin }) => (
  <article>
    Sign In Page
    <div>
      <button onClick={() => handleSignin('google')}>Google</button>
    </div>
  </article>
);

Signin.propTypes = {
  handleSignin: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleSignin: provider => dispatch(signin(provider)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
