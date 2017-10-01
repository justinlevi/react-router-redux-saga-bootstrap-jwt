import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { AppState as GlobalState } from '../rootReducer';

import { loginRequest, LoginRequest } from './Actions';


class RestrictedPage extends React.PureComponent {
  componentWillMount() {
    const { actions, idToken } = this.props;

    if (!idToken) {
      console.log(actions + 'NO TOKEN YO');
      // actions.loginRequest();
    }
  }

  render() {
    const { children, idToken } = this.props;

    return idToken ? children : <div>NOT AUTHORIZED</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  idToken: state.auth.idToken,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ loginRequest }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestrictedPage);