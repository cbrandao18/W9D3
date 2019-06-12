import React from 'react';
import ToDoListContainer from './todos/todo_list_container';

const App = () =>{
    return(
        <div>
            <h1>Todos.</h1>
            <ToDoListContainer />
        </div>
    );
}

export default App;