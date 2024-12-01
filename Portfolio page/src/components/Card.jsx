//import react and app.css
import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css';

//Card component
const Card = ({ title, image, link }) => {
    return (
        <div className="card">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt={title} className='card-image' />
                <div className='card-title'>
                    {title}
                </div>
            </a>
        </div>
    );
};

//export Card component
export default Card;