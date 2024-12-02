//import react
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


//ContactMe component
const ContactMe = () => {
    //State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    //handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //handle form data send it to api or log it
        console.log('Form submitted:', formData);
        //reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };
    return(
        <section className='page-wrapper'>
            <section className='page-section'>
                <h2 id='contact-me'>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className='contact'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder='Enter your name'
                        />
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder='Enter your email'
                        />
                        <label htmlFor='message'>Message:</label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder='Enter your message'
                        />
                        
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </section>
        </section>
    )
};

//export ContactMe component
export default ContactMe;