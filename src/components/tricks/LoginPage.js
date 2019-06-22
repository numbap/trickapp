import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="box-layout__title">Magic Tracker</h1>
        <p>Manage your repertoire. Improve your magic.</p>
        <button className="btn-lg btn-primary" onClick={startLogin}>Login with Google</button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
