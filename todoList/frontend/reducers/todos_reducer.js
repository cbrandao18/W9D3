import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    let newState = {};

    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach ( (todo) => {
                newState[todo.id] = todo;
            });
            return newState;
        case RECEIVE_TODO:
            let newTodo = {[action.todo.id]: action.todo}
            Object.assign(newState, state, newTodo);
            debugger
            return newState;
        default:
            return state;
    }
};

export default todosReducer;