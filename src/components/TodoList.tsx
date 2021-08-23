import React, { FC } from 'react';

import { ITodo} from '../interfaces';

type TodoListProps = {
    todos: ITodo[]
    onChek(id:number):void
    onRemove: (id:number) => void
}

export const TodoList: FC<TodoListProps> = ({ todos, onChek, onRemove  }) => {

    const removeHandler = (event: React.MouseEvent, id:number)=>{
        event.preventDefault()
        onRemove(id)
    }

    return (
        <>
        {todos.length === 0 ? <p className="center">Дел пока нет</p>: null}
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if(todo.completed){
                    classes.push('completed');
                }
                return (
                    <li key={todo.id} className={classes.join(' ')}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={()=>onChek(todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={event=>removeHandler(event, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}

        </ul>
        </>
    )
}