import React, {FC, useState} from 'react';

import { Navbar, Todoform, TodoList } from './components';

import { ITodo} from './interfaces';

import './App.css';

const App:FC = () => {
  const [todos, setTodos ] = useState<ITodo[]>([]);

  const addHandler = (title:string) => {
    const newTodo : ITodo = {
      title : title,
      id : Date.now(),
      completed : false
    }
    setTodos((todo)=>{
      return(
        [newTodo, ...todo]
      )
    })
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Todoform 
          onAdd = {addHandler}
        />
        <TodoList todos={todos}/>
      </div>
    </>
  )
}

export default App;
