//import React from 'react' and router
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
//import components
import Header from './components/header.jsx';
import HeroBanner from './components/HeroBanner';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';


//defined styled component
const HomeContainer = styled.div`
    text-align: center;
    padding: 250px;
    background: linear-gradient(to bottom right, rgba(106, 27, 154, 0.8), rgba(37, 117, 252, 0.8)), url('../src/Images/pexels-goumbik-574070.jpg') no-repeat center center/cover;
    color: white;

    h1 {
        font-size: 2.5rem;
        color: #333;
    }

    p {
        font-size: 1.2rem;
        color: black;
        margin: 20px 0;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2rem;
        }
            
        p {
            font-size: 1rem;
        }
    }
`;
//styled button
const CTAButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 20px;
    
    &:hover {
        background-color: #0056b3;
    }
`;

//App component
const App = () => {
    const navigate = useNavigate();

    return (
        <div id="root">
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={
                        <HomeContainer>
                            <h1>Welcome to My Portfolio</h1>
                            <p>This is the home page where you can find my latest projects and more about me!</p>
                            <p>Feel free to navigate to the other sections using the above menu or the button below to view my work!</p>
                            <CTAButton onClick={() => navigate('/work')}>View My Work</CTAButton>
                        </HomeContainer>
                    } />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact-me" element={<ContactMe />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

//export App component
export default App;