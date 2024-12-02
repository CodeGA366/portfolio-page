//import react and font awesome
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//Footer component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Greg Armstrong. All Rights Reserved</p>
                <ul className='footer-links'>
                    <li>
                        <a href="https://github.com/CodeGA366" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/greg-armstrong-013b06339/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
                    </li>
                </ul>
                <p>Phone: (936) 648-7316</p>
                <p>Email: <a href="mailto:codega366@gmail.com">codega366@gmail.com</a></p>
            </div>
        </footer>
    );
};

//export Footer component
export default Footer;