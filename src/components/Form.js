import React from 'react'

const Form = ({ inputText ,setInputText, todos, setTodos, setStatus }) => {
  // Here i can write Js functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault(); 
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.floor(Math.random()*1000+1)}
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input value={inputText} type="text" required className="todo-input" onChange={inputTextHandler} placeholder="Enter Task" />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" onClick={statusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;
