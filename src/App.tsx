import React, { FC, useState } from 'react';

import { Navbar, Todoform, TodoList } from './components';

import { ITodo } from './interfaces';

import './App.css';

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos((todo) => {
      return (
        [newTodo, ...todo]
      )
    })
  }

  const chekHandler = (id: number) => {
    setTodos(prev => 
      prev.map(t => {
        if (t.id === id) {
          const last = t.completed
          t.completed = !last
          console.log(t)
        }
        return t
      })
    )

  }

  const removeHandler = (id: number) => {
    console.log(id)
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Todoform
          onAdd={addHandler}
        />
        <TodoList
          todos={todos}
          onChek={chekHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  )
}

export default App;
