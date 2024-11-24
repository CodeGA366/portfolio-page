//import React from 'react'
import React from 'react';
//import components
import Header from './components/header.jsx';
import HeroBanner from './components/HeroBanner';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import ContactMe from './components/ContactMe';
import './App.css'

//App component
const App = () => {
    return (
        <div>
            <Header />
            <HeroBanner />
            <AboutMe />
            <Work />
            <ContactMe />
        </div>
    );
};

//export App component
export default App;