
import {React, useState} from 'react'

const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {

    const inputTextHandler = (e)=>{
  
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e)=>{
        e.preventDefault();
    setTodos([
       ...todos, 
       { text: inputText, completed: false, id: (Math.random()*1000)}
    ]);
    setInputText('');
   };
   
   const statusHandler = (e) =>{
     setStatus(e.target.value);
   }


    return (
        <div>
            <form >
      <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} placeholder="Enter the activity here...."/>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      </form>
        </div>
    )
}

export default Form

