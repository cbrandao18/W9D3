import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';
import AllTodos from './reducers/selectors';
import Root from './components/root';
// const Root = () =>{
// //     return <h1>Todos App</h1>
// // };

document.addEventListener('DOMContentLoaded', () =>{
  let store = configureStore();
  window.store = store;
  // window.receiveTodo = receiveTodo;

  window.AllTodos = AllTodos;
  
  let content = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, content);
})