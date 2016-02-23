import React, { Component } from 'react';
import store from '../stores/TodoStore.js';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/todoActions';
import todoService from '../service/todoService.js';


class AddTodoContainer extends Component {

    constructor() {
        super();
        this.state = { error: false };
        this.onAddTodoButton = this.onAddTodoButton.bind(this);
    }

    onAddTodoButton(event) {
        const { dispatch } = this.props;
        let newTodoContent = this.refs.todoInput.value.trim();
        if( newTodoContent !== "" ) {
            todoService.addTodo( newTodoContent )
                .then( (response) => {
                    console.log(response);
                    dispatch( addTodoAction(response.todo) );
                    this.setState( { error: false } );
                })
                .catch( (error) => {
                    this.setState( { error: true } );
                })
        }
        else {
            this.setState( { error: true } );
        }
    };

    render() {
        let errorMessage = this.state.error == true ? <div>empty field</div> : undefined;
        return (
            <div>
                <input type='text' ref='todoInput' />
                <button onClick={this.onAddTodoButton}>
                    Add
                </button>
                {errorMessage}
            </div>
        );
    };
};


export default connect( 
    (state) => {
        return state 
    } 
)(AddTodoContainer);