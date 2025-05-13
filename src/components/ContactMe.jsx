//import react
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '@fortawesome/fontawesome-free/css/all.min.css';


//ContactMe component
const ContactMe = () => {
    //State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
        
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

        //emailjs parameters
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        }

        //send email using emailjs
        emailjs.send('service_ydani6b', 'template_ohq8n9d', templateParams, 'ZxYcyQPHB_m7icvUV')
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccessMessage('Your message has been sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error);
                    setSuccessMessage('Failed to send your message. Please try again later.');
                }
            );
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
                {successMessage && <p>{successMessage}</p>}
            </section>
        </section>
    )
};

//export ContactMe component
export default ContactMe;