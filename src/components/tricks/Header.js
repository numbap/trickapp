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




// <header className="header">
// <div className="content-container">
//   <div className="header__content">
//     <Link className="header__title" to="/dashboard">
//       <h1>Trick App</h1>
//     </Link>
//     <button className="button button--link" onClick={startLogout}>Logout</button>
//   </div>
// </div>
// </header>


// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <a className="navbar-brand" href="#">Navbar</a>
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>

// <div className="collapse navbar-collapse" id="navbarSupportedContent">
//   <ul className="navbar-nav mr-auto">
//     <li className="nav-item active">
//       <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link" href="#">Link</a>
//     </li>
//     <li className="nav-item dropdown">
//       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         Dropdown
//       </a>
//       <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//         <a className="dropdown-item" href="#">Action</a>
//         <a className="dropdown-item" href="#">Another action</a>
//         <div className="dropdown-divider"></div>
//         <a className="dropdown-item" href="#">Something else here</a>
//       </div>
//     </li>
//     <li className="nav-item">
//       <a className="nav-link disabled" href="#">Disabled</a>
//     </li>
//   </ul>
//   <form className="form-inline my-2 my-lg-0">
//     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>
// </div>
// </nav>