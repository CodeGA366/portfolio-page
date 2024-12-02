//import react
import React from 'react';
//import Card component
import Card from './Card';

//Work component
const Work = () => {
    const projects = [
        {
            title: "Readme Generator",
            image: "../src/Images/readme.png",
            link: "https://github.com/CodeGA366/readme-generator-"
        },
        {
            title: "Vehicle Builder",
            image: "../src/Images/Vehicle.png",
            link: "https://github.com/CodeGA366/ultimate-vehicle-builder"
        },
        {
            title: "Employee Tracker",
            image: "../src/Images/employee.png",
            link: "https://github.com/CodeGA366/employee-tracker"
        },
        {
            title: "Weather Dashboard",
            image: "../src/Images/weather.png",
            link: "https://github.com/CodeGA366/weather-app"
        },
        { 
            title: "Basketball Stats",
            image: "../src/Images/basketball.png",
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