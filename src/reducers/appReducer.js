import { combineReducers } from 'redux';
import { SET_VISIBILITY_FILTER } from '../actions/filterActions.js';
import { ADD_TODO, ADD_TODOS, REMOVE_TODO, TOGGLE_TODO } from '../actions/todoActions.js';

const visibilityFilter = ( state = "SHOW_ALL" , action ) => {
    switch( action.type ) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    };
};


const todos = ( state = [], action ) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, 
                action.todo
            ];

        case ADD_TODOS:
            return state.concat(action.todos);

        case REMOVE_TODO:
            return state.filter( (todo) => {
                if( todo._id === action._id ) {
                    return false;
                }
                return true;
            });
        case TOGGLE_TODO:
            return state.map(todo => { // am folosit map pentru ca intoarce un array nou
                if( todo._id !== action._id ) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        default:
            return state;
    }
};


const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter,
    gettingDataState: false
});



export default todoApp;
