import { connect } from 'react-redux';
import TodoList from './todo_list';
import AllTodos from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => {
    return {
        todos: AllTodos(state)
    }
}

const mapDispatchToProps = dispatch => {
    debugger;
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo))
    }
}


// let connectedTodoList = connect(mapStateToProps, mapDispatchToProps)(todoList);
// export connectedTodoList;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);