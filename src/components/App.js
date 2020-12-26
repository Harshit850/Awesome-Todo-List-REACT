import React, { useState, useEffect } from 'react'
import './App.css'

import Form from './Form';
import TodoList from './TodoList';

const App = () => {
  
  // only run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  // states stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  // use effect
  useEffect(() =>{
    saveLocalTodos();
    filterHandler();
  }, [todos, status])

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  // save to locals
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      console.log(localTodo);
      setTodos(localTodo);
   }
  }

  // date and day
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();

  var newdDate = day+ "/" + month;
  return (
    <div className="App">
      <header>
        <h1>{newdDate} Todo List</h1>
      </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText} 
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
       />
    </div>
  )
}

export default App
