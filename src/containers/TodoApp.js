import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTodoContainer from './AddTodoContainer.js'
import TodoListContainer from './TodoListContainer.js'
import FiltersContainer from './FiltersContainer.js'

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/filterActions.js'

class TodoApp extends Component {

    render() {
        return (
            <div>
                <AddTodoContainer />
                <TodoListContainer />
                <FiltersContainer /> 
            </div>
        );
    }

}


export default TodoApp;