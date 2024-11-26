//import react and link
import React from 'react';
import { Link } from 'react-router-dom';
//Header component
const Header = () => {
    return (
        <header className="bg-primary text-white p-3">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to='/'>Home</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/about-me'>About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/work'>Portfollio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact-me'>Contact Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/resume'>Resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

//export Header component
export default Header;