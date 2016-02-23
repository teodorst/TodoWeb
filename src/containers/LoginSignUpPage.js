import React, { Component } from 'react';
import store from '../stores/TodoStore.js';
import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent.js';
import LoginForm from '../components/LoginForm.js';
import NavBarComponent from '../components/NavBarComponent.js';
import LoginSignUpContentComponent from '../components/LoginSignUpContentComponent.js';

class LoginSignUpPage extends Component {
  render() {
    return(
      <div>
        <NavBarComponent/>
        {/*<SignUpForm/>*/}
        <LoginSignUpContentComponent/>
      </div>
    );
  }

  onSignUpButton(e) {

  }

  onSignInButton(e) {
    
  }

}

export default connect(
    (state) => {
        return {};
    }
)(LoginSignUpPage);
