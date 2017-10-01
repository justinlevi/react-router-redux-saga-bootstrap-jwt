import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';

import NavItem from '../RouterNavItem';

export const HeaderNav = ({ idToken, handleLogin = (() => { }), handleLogout = (() => { }) }) => {

  return (
    <Navbar fluid={true}>
      <Navbar.Header>
        {/* <Navbar.Brand>
           <Link to="/">Home</Link>
        </Navbar.Brand> */}
        <Navbar.Toggle />
        <Nav>
          <NavItem href="/">HOME</NavItem>
          <NavItem href="/about">ABOUT</NavItem>
        </Nav>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight={true} >
          <NavItem href="#login" onClick={idToken ? handleLogout : handleLogin}>
            <div className="login-logout">{idToken ? 'LOGOUT' : 'LOGIN'}</div>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// export default Navbar;

const mapStateToProps = (state, ownProps) => ({
  // idToken: state.auth.idToken,
});

// const mapDispatchToProps = (dispatch) => ({
//   handleLogin: bindActionCreators(loginRequest, dispatch),
//   handleLogout: bindActionCreators(logout, dispatch),
// });

export default connect(mapStateToProps, {})(HeaderNav);
