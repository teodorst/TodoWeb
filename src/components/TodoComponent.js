import React, { Component } from 'react';
import store from '../stores/TodoStore.js';
import { connect } from 'react-redux';


class TodoComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <li key={this.props.todo.id} >
                <span 
                    style={
                        {
                            textDecoration: 
                                this.props.todo.completed ? 'line-through' : 'none'
                        }
                    } 
                    onClick={ (e) => { this.props.onToggleCb( this.props.todo._id, this.props.listPosition ) } } 
                >
                    {this.props.todo.content}
                </span>
                <span onClick={ (e) => { this.props.onDeleteCb(this.props.todo._id) } }> Delete </span>
            </li>
        );
    };

   

}


export default TodoComponent;