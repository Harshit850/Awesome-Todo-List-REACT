import React, { useState } from 'react'

const TodoForm =(props) => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit  = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000)+1,
            text: input
        })
        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add a task" 
                value={input} 
                name="text" 
                onChange={handleChange}
                className="todo-input"    
            />
            <button className="todo-button">Add Task</button>
        </form>
    )
}

export default TodoForm;
