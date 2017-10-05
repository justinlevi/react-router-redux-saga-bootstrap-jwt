import * as React from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../auth/actions';

// let createHandlers = function (dispatch) {
//   let onClick = function (node, data) {
//     dispatch(actions.loginRequest({
//       username: this.state.username,
//       password: this.state.password,
//       redirectTo: this.state.redirectTo
//     }))
//   };

//   return {
//     onClick,
//     // other handlers
//   };
// }

export class LoginView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  login(e) {
    e.preventDefault();
    let {dispatch} = this.props; 
    dispatch(actions.loginRequest(
      { 
        username: this.state.username, 
        password: this.state.password, 
      }
    ));
  }

  render() {
    const { isLoggingIn, jwtToken, error } = this.props;

    if (jwtToken) {
      return <Redirect to="/" />;
    }

    return (
      <div className='col-xs-12 col-md-6 col-md-offset-3'>
        <h3>Log in to view protected content!</h3>

        {this.props.error ? <div className='alert alert-info'>{this.props.error}</div> : ''}
        <form>
          <div className='form-group'>
            <input type='text'
              name="username"
              value={this.state.username}
              className='form-control input-lg'
              onChange={this.handleInputChange}
              placeholder='Username' />
          </div>
          <div className='form-group'>
            <input type='password'
              name="password"
              value={this.state.password}
              className='form-control input-lg'
              onChange={this.handleInputChange}
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

const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.isLoggingIn,
  jwtToken: state.auth.jwtToken,
  error: state.auth.error
});

export default connect(mapStateToProps)(LoginView);
