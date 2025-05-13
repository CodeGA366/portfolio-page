import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGamepad, faLaptopCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import ContactMe from './ContactMe';

const AboutMe = () => {
    const [showSkills, setShowSkills] = useState(false);
    const [showInterests, setShowInterests] = useState(false);

    const navigate = useNavigate(); // Initialize useNavigate

    const toggleSkills = () => setShowSkills(!showSkills);
    const toggleInterests = () => setShowInterests(!showInterests);

    return (
        <section className="about-me-container">
            {/* Introduction Section */}
            <div className="about-me-intro">
                <h1>About Me</h1>
                <p>
                    Hi, I’m <strong>Gregory Armstrong</strong> — a people-first problem solver making the leap from restaurant leadership to software and web development. 
                    After six years in the hospitality industry, I’ve learned how to stay cool under pressure, communicate clearly, and lead teams with empathy — all skills that translate naturally into tech.
                </p>
                <p>
                    I recently completed a full-stack development bootcamp through the University of Denver, where I honed my skills in <strong>JavaScript</strong>, <strong>Python</strong>, <strong>TypeScript</strong>, <strong>C#</strong>, <strong>React</strong>, and <strong>Node.js</strong>. 
                    I’m passionate about bridging people and technology—whether that’s through building intuitive user interfaces, automating complex processes, or collaborating with cross-functional teams to bring an idea to life.
                </p>
                <p>
                    I’m currently looking for opportunities where I can grow as a developer, contribute to meaningful projects, and be part of a team that values creativity, collaboration, and continuous learning.
                </p>
                <button className="cta-button" onClick={() => navigate('/contact-me')}>
                    Contact Me
                </button>
            </div>

            {/* Skills Section */}
            <div className="about-me-section">
                <h2 onClick={toggleSkills} className="section-header">
                    <FontAwesomeIcon icon={faCode} /> Skills
                </h2>
                {showSkills && (
                    <div className="skills-list">
                        <div className="skill-card">
                            <FontAwesomeIcon icon={faLaptopCode} className="skill-icon" />
                            <h3>Languages</h3>
                            <p>JavaScript, TypeScript, Python, C#</p>
                        </div>
                        <div className="skill-card">
                            <FontAwesomeIcon icon={faLightbulb} className="skill-icon" />
                            <h3>Frameworks</h3>
                            <p>React, Node.js, Express.js</p>
                        </div>
                        <div className="skill-card">
                            <FontAwesomeIcon icon={faGamepad} className="skill-icon" />
                            <h3>Tools</h3>
                            <p>Git, CI/CD, Docker</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Interests Section */}
            <div className="about-me-section">
                <h2 onClick={toggleInterests} className="section-header">
                    <FontAwesomeIcon icon={faLightbulb} /> Interests
                </h2>
                {showInterests && (
                    <div className="interests-list">
                        <p>
                            Outside of work, I’m deeply passionate about creative technology. I love exploring the intersection of design and function through web and software development, and I’m always experimenting with new ideas—whether that’s building sleek, responsive web interfaces or tinkering with game mechanics.
                        </p>
                        <p>
                            I also have a growing interest in video editing and digital storytelling, and I enjoy learning how visuals, interactivity, and sound can come together to create immersive user experiences.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AboutMe;