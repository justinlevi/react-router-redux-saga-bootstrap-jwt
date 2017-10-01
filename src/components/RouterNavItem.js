import * as React from 'react';
import { NavItem } from 'react-bootstrap';
import { Route } from 'react-router-dom';

// tslint:disable-next-line:no-any
export const RouteNavItem = (props) =>
  (
    <Route
      path={props.href}
      exact={true}
      children={({ match, history }) =>
        <NavItem
          onClick={(e) => history.push(e.currentTarget.getAttribute('href'))}
          {...props}
          active={match ? true : false}
        >
          {props.children}
        </NavItem>}
    />
  );

export default RouteNavItem;