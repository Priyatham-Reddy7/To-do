import Form from './components/Form';
import './App.css';
import TodoList from './components/TodoList'
import React, { useState, useEffect } from 'react'


function App() {
  //?States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //?useeffect
  useEffect(()=>{
    filterHandler();
  }, [todos, status]);

 

  //?Functions
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }



  return (
    <div className="App">
      <header>
        <h1 className="main-h1">Priyatham's To-Do List </h1>
      </header>
      <Form
       setInputText={setInputText}
       inputText= {inputText}
       setTodos={setTodos}
       todos ={todos}
       setStatus={setStatus}
       
       />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos = {filteredTodos}/>
    </div>
  );
}

export default App;
