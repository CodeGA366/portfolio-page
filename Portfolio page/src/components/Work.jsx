//import react
import React from 'react';

//Work component
const Work = () => {
    return (
        <section className='page-wrapper'>
            <section className='page-section'>
                <h2 id='work'>Work</h2>
                <div className='flex-container'>
                    <div className='surf-report'>
                        <figure className='flex-item'>
                            <div>
                                <h3>Surf Report</h3>
                            </div>
                        </figure>
                    </div>
                    <div className='led-wall'>
                        <figure className='flex-item'>
                            <div>
                                <h3>Led Wall</h3>
                            </div>
                        </figure>
                    </div>
                    <div className='react-calc'>
                        <figure className='flex-item'>
                            <div>
                                <h3>React Calculator</h3>
                            </div>
                        </figure>
                    </div>
                    <div className='pastel-puzzles'>
                        <figure className='flex-item'>
                            <div>
                                <h3>Pastel Puzzles</h3>
                            </div>
                        </figure>
                    </div>
                    <div className='run-buddy'>
                        <figure className='flex-item'>
                            <div>
                                <h3>Run Buddy</h3>
                            </div>
                        </figure>
                    </div>
                </div>
            </section>
        </section>
    );
};

//export Work component
export default Work;