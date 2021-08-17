import React, { FC } from 'react';

export const Navbar: FC = () => {

    return (
        <nav className="purple accent-4">
            <div className="nav-wrapper px-1">
                <a href="#!" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#!">Список дел</a></li>
                    <li><a href="#!">Информация</a></li>
                </ul>
            </div>
        </nav>

    )
}
