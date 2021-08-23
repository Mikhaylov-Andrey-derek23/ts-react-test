import React, { FC } from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar: FC = () => {

    return (
        <nav className="purple accent-4">
            <div className="nav-wrapper px-1">
                <a href="#!" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}
