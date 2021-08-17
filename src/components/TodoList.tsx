import React, { FC } from 'react';

export const TodoList:FC = () => {
    
    return(
        <ul className="todo">
            <li>
                <label>
                    <input type="checkbox"/>
                    <span></span>
                    <i className="material-icons red-text">delete</i>
                </label>
            </li>
        </ul>
    )
}