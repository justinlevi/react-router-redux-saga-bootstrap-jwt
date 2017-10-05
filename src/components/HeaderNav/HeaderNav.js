import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import NavItem from '../RouterNavItem';
import { LinkContainer } from 'react-router-bootstrap'

export const HeaderNav = ({ jwtToken }) => {
  return (
    <Navbar fluid={true}>
      <Navbar.Header>
        {/* <Navbar.Brand>
           <Link to="/">Home</Link>
        </Navbar.Brand> */}
        <Navbar.Toggle />
        <Nav>
          <LinkContainer to="/">
            <NavItem>HOME</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem>ABOUT</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight={true} >
          <LinkContainer to={jwtToken ? '/logout' : '/login'}>
            <NavItem>
              <div className="login-logout">{jwtToken ? 'LOGOUT' : 'LOGIN'}</div>
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state, ownProps) => ({
  jwtToken: state.auth.jwtToken,
});

export default connect(mapStateToProps, null, null, {
  pure: false
})(HeaderNav);
