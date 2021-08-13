import React, { FC } from 'react';

export const Navbar: FC = () => {

    return (
        <nav className="purple accent-4">
            <div className="nav-wrapper px-1">
                <a href="#!" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#!">sass</a></li>
                    <li><a href="#!">sass</a></li>
                </ul>
            </div>
        </nav>

    )
}
