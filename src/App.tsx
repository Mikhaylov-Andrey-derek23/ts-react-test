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
    console.log(2)
    setTodos(prev => 
      prev.map(t => {
        if (t.id === id) {
          return {
            ...t,
            completed : !t.completed 
          }
        }
        return t
      })
    )
  }

  const removeHandler = (id: number) => {
    console.log(1)
    setTodos(prev=> prev.filter(t => t.id !== id))
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
