import React, { Component } from 'react';
import store from '../stores/TodoStore.js';
import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent.js';
import LoginForm from '../components/LoginForm.js';
import img_src from '../assets/images/Pedobear.png';
import {Row, Col, Grid } from 'react-bootstrap';

class NavBarComponent extends Component {
  render() {
    return(
      <nav className="navbar navbar-default myNavBar">
        <div className="container-fluid">
          <div className="navbar-header ">
              <img src={img_src} height="52" width="52"/>
          </div>
            <form className="navbar-form navbar-right" role="search">
            <table cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <label className="loginLabel">Username or email</label>
                  </td>
                  <td>
                    <label className="loginLabel">Password</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" className="form-control loginInput" placeholder="Enter here"/>
                  </td>
                  <td>
                    <input type="text" className="form-control loginInput" placeholder="Enter here"/>
                  </td>
                  <td>
                    <button type="submit" className="btn btn-default btn-sm">Sign In</button>
                  </td>
                </tr>
              </tbody>
            </table>
            </form>
        </div>
      </nav>
    );
  }
}

export default connect(
    (state) => {
        return {};
    }
)(NavBarComponent);
