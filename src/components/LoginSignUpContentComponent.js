import React, { Component } from 'react';
import store from '../stores/TodoStore.js';
import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent.js';
import LoginForm from '../components/LoginForm.js';
import {Row, Col, Grid } from 'react-bootstrap';


class LoginSignUpContentComponent extends Component {
  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col md={6} mdPush={6}>
          <LoginForm/>

          </Col>
          <Col md={6} mdPull={6}>
            <p>Aici o sa am o mica descriere a aplicatiei</p>
            <p> Creeaza colectii de todos </p>
            <p> share-uieste </p>
            <p> colaboreaza la proiecte </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(
    (state) => {
        return {};
    }
)(LoginSignUpContentComponent);
