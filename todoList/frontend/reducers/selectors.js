
const AllTodos = ({todos}) =>{
    let todosArr = [];
    Object.keys(todos).forEach( id => todosArr.push(todos[id]));
    return todosArr;
}

export default AllTodos;
