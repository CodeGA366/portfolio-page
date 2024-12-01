//import react
import React, { useState} from 'react';

//AboutMe component
const AboutMe = () => {
    //dropdown for javascript and typescript
    const [showLanguages, setShowLanguages] = useState(false);
    const toggleLanguages = () => {
        setShowLanguages(!showLanguages);
    };


    return (
        <section className='page-wrapper'>
            <section className='page-section'>
                <h2 id='about-me'>About Me</h2>
                <p>
                    I am a web developer with a passion for creating engaging user experiences. I have experience with HTML, CSS, and JavaScript, SQL, typesript, and I am currently learning React. I am excited to continue to grow my skills and work on projects that challenge me. Click on the links below to see my GitHub repositories!
                </p>
                <h3>Skills</h3>
                <ul>
                    <li><a href='https://github.com/MarkSian/amg-basketball-group' target="_blank" rel="noopener noreferrer">HTML</a></li>
                    <li><a href='https://github.com/CodeGA366/weather-app' target='_blank' rel="noopener noreferrer">CSS</a></li>
                    <li onClick={toggleLanguages} style={{cursor: 'pointer'}}>JavaScript/TypeScript</li>
                    {showLanguages && (
                        <ul>
                            <li><a href='https://github.com/CodeGA366/readme-generator-' target='_blank' rel="noopener noreferrer">JavaScript</a></li>
                            <li><a href='https://github.com/CodeGA366/ultimate-vehicle-builder' target='_blank' rel="noopener noreferrer">TypeScript</a></li>
                        </ul>
                    )}
                    <li><a href='https://github.com/CodeGA366/employee-tracker' target='_blank' rel='noopener noreferrer'>SQL</a></li>
                    <li><a href='https://github.com/CodeGA366/portfolio-page' target='_blank' rel='noopener norefferrer'>React</a></li>
                </ul>
                <h3>Interests</h3>
                <p>I enjoy working on projects that challenge my creative and technical skills!</p>
            </section>
        </section>
    );
};

//export AboutMe component
export default AboutMe;