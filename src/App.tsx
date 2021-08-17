import React, {FC, useState} from 'react';

import { Navbar, Todoform, TodoList } from './components';

import './App.css';

const App: React.FC = () => {
  const [todos, setTodos ] = useState([]);

  const addHandler = (title:string) => {
    console.log('add new Todo', title)
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Todoform 
          onAdd = {addHandler}
        />
        <TodoList/>
      </div>
    </>
  )
}

export default App;
