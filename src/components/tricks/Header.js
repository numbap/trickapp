import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Header = ({ startLogout }) => (

  <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <Link className="navbar-brand" to="/dashboard">Magic Tracker</Link>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
  
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mr-auto">
       <li className="nav-item active">
       <Link className="nav-link" to="/create">Add Trick</Link>
       </li>
     </ul>
       <button className="btn btn-outline-primary my-2 my-sm-0" onClick={startLogout} type="submit">Logout</button>
   </div>
   </nav>

  </div>

);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);