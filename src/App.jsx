//import React from 'react' and router
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
//import components
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Work from './components/Work.jsx';
import ContactMe from './components/ContactMe.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';
import Videos from './components/videos.jsx';
import Games from './components/games.jsx';
import Snake from './components/Snake.jsx';
import TicTacToe from './components/TicTacToe.jsx';
import HtmlCSStemplate from './components/HtmlCSStemplate.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

// Styled components for the homepage
const HeroSection = styled.section`
    text-align: center;
    padding: 100px 20px;
    background: linear-gradient(to bottom right, rgba(106, 27, 154, 0.8), rgba(37, 117, 252, 0.8)), url('../src/Images/pexels-goumbik-574070.jpg') no-repeat center center/cover;
    color: white;

    h1 {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 30px;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
`;

const CTAButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    margin: 10px;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
`;

const LinksSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 50px 20px;
    background-color: #f9f9f9;

    .link-card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: center;
        width: 250px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        p {
            font-size: 1rem;
            margin-bottom: 15px;
        }

        button {
            background-color: #6a1b9a;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #4a148c;
            }
        }
    }
`;

const App = () => {
    const navigate = useNavigate();

    return (
        <div id="root">
            <Header />
            <div className="main-content">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {/* Hero Section */}
                                <HeroSection>
                                    <h1>Welcome to My Portfolio</h1>
                                    <p>Explore my projects, skills, and more!</p>
                                    <CTAButton onClick={() => navigate('/about-me')}>Learn About Me</CTAButton>
                                    <CTAButton onClick={() => navigate('/contact-me')}>Contact Me</CTAButton>
                                </HeroSection>

                                {/* Links Section */}
                                <LinksSection>
                                    <div className="link-card">
                                        <h3>Portfolio</h3>
                                        <p>Check out my latest projects and work.</p>
                                        <button onClick={() => navigate('/work')}>View Portfolio</button>
                                    </div>
                                    <div className="link-card">
                                        <h3>Games</h3>
                                        <p>Play some fun games I built More coming soon!</p>
                                        <button onClick={() => navigate('/games')}>Play Games</button>
                                    </div>
                                    <div className="link-card">
                                        <h3>Templates</h3>
                                        <p>Explore my HTML and CSS templates.</p>
                                        <button onClick={() => navigate('/html-css')}>View Templates</button>
                                    </div>
                                    <div className="link-card">
                                        <h3>Resume</h3>
                                        <p>View my a copy of professional resume.</p>
                                        <button onClick={() => navigate('/resume')}>View Resume</button>
                                    </div>
                                    <div className="link-card">
                                        <h3>Videos</h3>
                                        <p>Watch videos of my projects in action.</p>
                                        <button onClick={() => navigate('/videos')}>Watch Videos</button>
                                    </div>
                                </LinksSection>
                            </>
                        }
                    />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact-me" element={<ContactMe />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/Snake" element={<Snake />} />
                    <Route path="/tictactoe" element={<TicTacToe />} />
                    <Route path="/html-css" element={<HtmlCSStemplate />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

//export App component
export default App;