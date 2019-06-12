import React from 'react';
import { uniqueId } from '../../util/utils';
// import { receiveTodo } from '../../actions/todo_actions';

class TodoListForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let uid = uniqueId();
        let todo = Object.assign({}, this.state, {id: uid});
        debugger
        this.props.receiveTodo(todo);
    }

    updateTitle(event){
        this.setState({title: event.target.value});
    }

    updateBody(event){
        this.setState({body: event.target.value});
    }

    render(){
        return(<div>
            <form onSubmit={this.handleSubmit}>
                <label> Title:
                    <input type="text" onChange={this.updateTitle}/>
                </label>
                <label> Body:
                    <textarea cols='20' rows='5' onChange={this.updateBody}/>
                </label>
                <button type="submit">Create Todo!</button>
            </form>
        </div>);
    }
}

export default TodoListForm;