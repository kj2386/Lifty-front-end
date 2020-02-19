import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">Lifty</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/upperbody">Upper Body</Link>
                    </li>
                    <li>
                        <Link to="/lowerbody">Lower Body</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
