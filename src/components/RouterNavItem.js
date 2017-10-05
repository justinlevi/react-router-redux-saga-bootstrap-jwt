import * as React from 'react';
import { NavItem } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

export const RouteNavItem = (props, state) => {

  return (
    <Route
      path={props.href}
      exact={true}
      children={({ match, history }) =>
        <NavItem
          // onClick={(e) => history.push(e.currentTarget.getAttribute('href'))}
          // onClick={(e) => {
          //   push(e.currentTarget.getAttribute('href'))
          //   e.preventDefault();
          //   }
          // }
          {...props}
          active={match ? true : false}
        >
          {props.children}
        </NavItem>}
    />
  );
}

export default RouteNavItem;