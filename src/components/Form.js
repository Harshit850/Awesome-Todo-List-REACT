import React from 'react'

const Form = () => {
  // Here i can write Js functions
  const inputTextHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <form>
      <input type="text" className="todo-input" onChange={inputTextHandler}/>
      <button className="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form;