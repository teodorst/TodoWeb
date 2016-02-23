export const ADD_TODO = "ADD_TODO";
export const ADD_TODOS = "ADD_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodoAction = (newTodo) => {
    return {
        type: ADD_TODO,
        todo: newTodo,
    }
}

export const addTodosAction = (newTodos) => {
    return {
        type: ADD_TODOS,
        todos: newTodos,
    }
}


export const removeTodoAction = ( id ) => {
    return {
        _id: id,
        type: REMOVE_TODO
    }
}

export const toggleTodoAction = (id) => {
    return {
        _id: id,
        type: TOGGLE_TODO
    }
}