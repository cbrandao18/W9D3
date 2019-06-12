import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_list_form';

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let listItems = this.props.todos.map ( todo => {
            return (
                <TodoListItem todo={todo} key={todo.id} />
            )
        })
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
                <TodoListForm receiveTodo={this.props.receiveTodo}/>
            </div>
        )
    }
}
export default TodoList;

// const oneLiner = () => <h3>Todo List goes here!</h3>
// module.exports = oneLiner;