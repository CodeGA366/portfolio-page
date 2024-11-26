//import react 
import React from 'react';

//Resume component render my google doc resume
const Resume = () => {
    return (
        <div className='resume'>
            <section className="google-doc">
                <h1>My Resume</h1>
                <iframe
                    src="https://docs.google.com/document/d/18T6p19isD3ImZgdP1dCL-xEZAxjlryBgfk0PsRZYPQ8/preview"
                    width="100%"
                    height="600px"
                    frameBorder="0"
                    title="My Resume"
                ></iframe>
            </section>
        </div>
    );
};

//export Resume component
export default Resume;
