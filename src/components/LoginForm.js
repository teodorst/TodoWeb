import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import store from '../stores/TodoStore.js';
import { connect } from 'react-redux';
import { ButtonInput, Input } from 'react-bootstrap';

class LoginForm extends Component {

  constructor() {
    super();
  }

  render() {
    console.log('be vali');
    return (
      <div>
        <h3>Sign Up Now!</h3>
        <div>
          <label> Username: </label>
          <Input type="text" placeholder="Username" />
        </div>
        <div>
          <label> Email: </label>
          <Input type="email" placeholder="Email address" />
        </div>
        <div>
          <label> Password: </label>
          <Input type="password" placeholder="Password" />
        </div>
        <ButtonInput type="submit" value="Submit Button" />
      </div>
    );
  }
}

export default connect(
    (state) => {
        return {};
    }
)(LoginForm);
