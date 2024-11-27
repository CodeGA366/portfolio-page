//import react and link
import React from 'react';
import { Link } from 'react-router-dom';
//import app.css
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Header component
const Header = () => {
    return (
        <header className="bg-custom text-white p-3">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand text-custom" to='/'>Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label='Toggle navigation'>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-custom" to='/about-me'>About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-custom" to='/work'>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-custom" to='/contact-me'>Contact Me</Link>
                            </li>
                            <li className="nav-item text-custom">
                                <Link className="nav-link text-custom" to='/resume'>Resume</Link>
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