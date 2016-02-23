let todoService = {};

// const fetchOpts = {
//     method,
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     json: true,
// };

const baseUrl = "http://localhost:3005/api/"

let apiCall = function( method, path, data, opts ) {
    opts = opts || {};
    opts = opts.request | {};

    const fetchOpts = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        json: true
    };

    if( data ) {
        fetchOpts.body = JSON.stringify(data);
    }

    return fetch( baseUrl + path, Object.assign({}, opts.request, fetchOpts) )
        .then( response => {
            if( response < 200 || response > 300 ) {
                throw new Error( "Can't ${method} ${path}: HTTP Error ${response.status} ");
            }
            return response.json();
        });
}

todoService.getTodos = () => {
    return apiCall( 'GET', '123/todos' );
}

todoService.addTodo = ( content ) => {
    return apiCall( 'POST', '123/todos', { content } );
}

todoService.completeTodo = ( todo ) => {
    console.log( '123/todos/' + todo._id );
    let newTodo = Object.assign( {}, todo, { completed : !todo.completed });
    return apiCall( 'PUT', '123/todos/' + todo._id, newTodo );
}

export default todoService;