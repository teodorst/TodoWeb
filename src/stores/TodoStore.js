import { createStore } from 'redux';
import todoApp from '../reducers/appReducer.js';


const appStore = createStore(todoApp);

export default appStore;