import React from 'react/addons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './Actions';

export class LoginView extends React.Component {

  constructor(props) {
    super(props);
    const redirectRoute = this.props.location.query.next || '/login';
    this.state = {
      email: '',
      password: '',
      redirectTo: redirectRoute
    };
  }

  login(e) {
    e.preventDefault();
    this.props.actions.loginUser(this.state.email, this.state.password, this.state.redirectTo);
  }

  render() {
    return (
      <div className='col-xs-12 col-md-6 col-md-offset-3'>
        <h3>Log in to view protected content!</h3>

        {this.props.error ? <div className='alert alert-info'>{this.props.error}</div> : ''}
        <form role='form'>
          <div className='form-group'>
            <input type='text'
              className='form-control input-lg'
              valueLink={this.linkState('email')}
              placeholder='Email' />
          </div>
          <div className='form-group'>
            <input type='password'
              className='form-control input-lg'
              valueLink={this.linkState('password')}
              placeholder='Password' />
          </div>
          <button type='submit'
            className='btn btn-lg'
            disabled={this.props.isLoggingIn}
            onClick={this.login.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}

reactMixin(LoginView.prototype, React.addons.LinkedStateMixin);

const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.isLoggingIn,
  error: state.auth.error
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
