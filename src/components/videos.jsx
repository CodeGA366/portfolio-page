import React, { useState } from 'react';
import '../App.css';
import readme from '../Images/readme.png';
import vehicle from '../Images/Vehicle.png';
import employee from '../Images/employee.png';
import weather from '../Images/weather.png';
import basketball from '../Images/basketball.png';
import Card from './Card.jsx';

const Video = () => {
    const [selectedCategory, setSelectedCategory] = useState('websites');

    const websites = [
        {
            title: "Readme Generator",
            image: readme,
            link: "https://github.com/CodeGA366/readme-generator-"
        },
        {
            title: "Vehicle Builder",
            image: vehicle,
            link: "https://github.com/CodeGA366/ultimate-vehicle-builder"
        },
    ];

    const apps = [
        {
            title: "Employee Tracker",
            image: employee,
            link: "https://github.com/CodeGA366/employee-tracker"
        },
        {
            title: "Weather Dashboard",
            image: weather,
            link: "https://github.com/CodeGA366/weather-app"
        },
        {
            title: "Basketball Stats",
            image: basketball,
            link: "https://github.com/MarkSian/amg-basketball-group"
        }
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <section className="container-fluid">
            <div className="row" style={{ display: 'flex' }}>
                {/* Sidebar */}
                <div className="col-md-3 bg-light sidebar p-3">
                    <h2>Video Menu</h2>
                    <div className="controls">
                        <button
                            className="btn btn-primary btn-block mb-2"
                            onClick={() => handleCategoryChange('websites')}
                        >
                            Websites
                        </button>
                        <button
                            className="btn btn-primary btn-block mb-2"
                            onClick={() => handleCategoryChange('apps')}
                        >
                            Games
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="col-md-9 p-4">
                    <section className="page-section">
                        <div className="flex-container">
                            {selectedCategory === 'websites' && (
                                <div className="section websites">
                                    <h2 id="work">Websites</h2>
                                    <div className="flex-container">
                                        {websites.map((project, index) => (
                                            <Card
                                                key={index}
                                                title={project.title}
                                                image={project.image}
                                                link={project.link}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            {selectedCategory === 'apps' && (
                                <div className="section apps">
                                    <h2>Games</h2>
                                    <div className="flex-container">
                                        {apps.map((project, index) => (
                                            <Card
                                                key={index}
                                                title={project.title}
                                                image={project.image}
                                                link={project.link}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Video;
