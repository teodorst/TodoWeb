import React, { Component } from 'react';
import store from '../stores/TodoStore.js';
import { connect } from 'react-redux';
import TodoComponent from '../components/TodoComponent.js'

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/filterActions.js'

import { removeTodoAction, toggleTodoAction, addTodosAction } from '../actions/todoActions';
import todoService from '../service/todoService.js';

class TodoListContainer extends Component {
    
    constructor() {
        super();
        this.onToggleTodo = this.onToggleTodo.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
    }

    componentWillMount() {
        todoService.getTodos()
            .then( (response) => {
                console.log(response.todos);
                this.props.dispatch( addTodosAction(response.todos) );
            })
            .catch( (error) => {
                console.log(error);
            });
    };  
    
    render() {
        //console.log("----- Rerandez lista ----");
        let visibleTodos = this.getVisibleTodos( this.props.state.todos, this.props.state.visibilityFilter );
        let gotTodos = this.props.state.todos.length > 0 ? true : false;
        
        //console.log('----- Visible todos: ----- ', visibleTodos);        
        
        if ( gotTodos === false ) {
            return ( <div> No todoes, add a new todo </div> );
        }
        else {
            return (
                <ul>
                    {
                        visibleTodos.map( 
                            (todo, position) => {
                                return (
                                    <TodoComponent 
                                        key={todo._id} 
                                        todo={todo} 
                                        listPosition={ position }
                                        onToggleCb={ this.onToggleTodo }
                                        onDeleteCb={ this.onDeleteTodo }
                                    />
                                )
                            }
                        )
                    }
                </ul>
            );
        }
    }

    getVisibleTodos( todos, filter ) {
        if( filter ===  SHOW_ALL )
            return todos;
        else 
            if( filter === SHOW_COMPLETED ) {
                return todos.filter( t => t.completed );
        }
        else {
            return todos.filter( t => !t.completed );
        }
    }

    onToggleTodo( todoId ) {
        // i will update UI after the databse is updated.
        const { dispatch } = this.props;
        const todos = this.props.state.todos;
        for( let i = 0; i < todos.length; i ++ ) {
            if( todos[i]._id === todoId ) {
                console.log("Todo-ul cautat", todos[i]._id );
                todoService.completeTodo( todos[i] )
                    .then( (response) => {
                        console.log("Update from server:", response );
                        dispatch( toggleTodoAction( todoId ) );
                    })
                    .catch( (error) => {
                        console.log( error );
                    });        
                break;
            }
        }   
    }

    onDeleteTodo( todoId ) {
        const {dispatch} = this.props;
        dispatch( removeTodoAction( todoId ) );
    };

}

export default connect( 
    (state) => {
        return { state }; 
    }
)(TodoListContainer);