// const createStore = (reducer) => {
//     let state;
//     let listeners = [];

//     const getState = () => {
//         return state;
//     };

//     const dispatch = (action) => {
//         state = reducer( state, action );
//         listeners.forEach( listener => listener() ); // listeners sunt functii, si se apeleaza la dispatch
//     };

//     const subscribe = ( listener ) => {
//         listeners.push(listener);
//         return () => {
//             listeners  = listeners.filter( l => l !== listener );
//         };
//     };

//     dispatch( {} );

//     return { getState, dispatch, subscribe };
// };


//increment app

// import { createStore } from 'redux';
// import ReactDOM from 'react-dom';
// import React from 'react'


// const counter = ( state = 0, action ) => {
//     switch( action.type ) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state;

//     }
// }


// const store = createStore(counter);

// const Counter = ({ value, onIncrement, onDecrement }) => {
//     return (
//         <div>
//             <h1> {value} </h1>
//             <button onClick={onIncrement}>+ </button>
//             <button onClick={onDecrement}>- </button>
//         </div>
//     )
// }

// const render = () => {
//     ReactDOM.render(
//         <Counter
//             value={store.getState()}
//             onIncrement={ () => {
//                     store.dispatch( {type: "INCREMENT"});
//                 }
//             }
//             onDecrement={ () => {
//                     store.dispatch( {type: "INCREMENT"} );
//                 }
//             }
//         />,
//         document.getElementById('root')
//      );
// }


// store.subscribe(render);
// render();

// TODO app

import 'whatwg-fetch';
import './css/bootstrap_css/bootstrap.css'
import './css/navbar_css.css'

import React from 'react'
import ReactDOM from 'react-dom';
import store from './stores/TodoStore.js';
import { Provider } from 'react-redux'
import { addTodoAction, toggleTodoAction} from './actions/todoActions.js';
import { setVisibilityFilterAction } from './actions/filterActions.js';

import TodoApp from './containers/TodoApp.js';
import LoginSignUpPage from './containers/LoginSignUpPage.js'
import todoService from './service/todoService.js'



ReactDOM.render(
    <Provider store={store}>
        <LoginSignUpPage />
    </Provider>
    ,
    document.getElementById('root')
);
