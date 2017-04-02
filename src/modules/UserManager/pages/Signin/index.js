import React from 'react';
import { connect } from 'react-redux';

import SigninForm from '../../components/SigninForm';
import { localSigninRequest } from '../../data/Signin/actions';

const Signin = ({ dispatchLocalSigninRequest }) => (
  <article>
    Sign In Page

    <SigninForm handleSignin={dispatchLocalSigninRequest} />
  </article>
);

Signin.propTypes = {
  dispatchLocalSigninRequest: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

// const mapDispatchToProps = (dispatch, ownProps) => ({
const mapDispatchToProps = dispatch => ({
  dispatchLocalSigninRequest: values => {
    dispatch(localSigninRequest(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
