//import React from 'react' and router
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import components
import Header from './components/header.jsx';
import HeroBanner from './components/HeroBanner';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//App component
const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <HeroBanner />
                <Routes>
                    <Route path="/" element={
                        <div>
                            <h1>Welcome to My Portfolio</h1>
                            <p>This is the home page where you can find my latest projects and more about me</p>
                            <p>Feel free to navigate to the other sections using the above menu!</p>
                        </div>
                    } />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact-me" element={<ContactMe />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

//export App component
export default App;