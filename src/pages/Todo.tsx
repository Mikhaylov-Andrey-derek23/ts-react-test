import React, { FC, useState, useEffect } from 'react';

import { Todoform, TodoList } from '../components';

import { ITodo } from '../interfaces';

declare var confirm: (question:string)=> boolean;

const Todo: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(saved)
  }, [])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

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
    const showReamove = confirm('Вы хотите удалить данный элемент');
    if(showReamove){
      setTodos(prev=> prev.filter(t => t.id !== id))
    }
    
  }

  return (
    <>
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

export default Todo;
