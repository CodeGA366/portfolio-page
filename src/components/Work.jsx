//import react
import React from 'react';
//import Card component
import Card from './Card.jsx';
//import images
import readme from '../Images/readme.png';
import vehicle from '../Images/Vehicle.png';
import employee from '../Images/employee.png';
import weather from '../Images/weather.png';
import basketball from '../Images/basketball.png';

//Work component
const Work = () => {
    const projects = [
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
    return (
        <section className='page-wrapper'>
            <section className='page-section'>
                <h2 id='work'>Portfolio</h2>
                <div className='flex-container'>
                    {projects.map((project, index) => (
                        <Card Key={index} title={project.title} image={project.image} link={project.link} />
                    ))}
                </div>
            </section>
        </section>
    )
}

//export Work component
export default Work;