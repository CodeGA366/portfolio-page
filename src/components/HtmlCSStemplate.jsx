import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../HtmlCSStemplate.css'; // Import custom CSS

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const HtmlCSStemplate = () => {
    const [menuVisible, setMenuVisible] = useState(true); // State to track menu visibility
    const [selectedStructure, setSelectedStructure] = useState('contact');
    const [selectedStyle, setSelectedStyle] = useState('style1');

    // Toggle menu visibility
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    // HTML structures
    const ContactPage = () => (
        <div className={`template ${selectedStyle}`}>
            <h1>Contact Us</h1>
            <form className="contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );

    const InputMenu = () => (
        <div className={`template ${selectedStyle}`}>
            <h1>Input Menu</h1>
            <form className="input-form">
                <div className="form-group">
                    <label>Input 1</label>
                    <input type="text" name="input1" placeholder="Enter input 1" />
                </div>
                <div className="form-group">
                    <label>Input 2</label>
                    <input type="text" name="input2" placeholder="Enter input 2" />
                </div>
                <div className="form-group">
                    <label>Input 3</label>
                    <input type="text" name="input3" placeholder="Enter input 3" />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );

    const LandingPage = () => (
        <div className={`template ${selectedStyle}`}>
            {/* Hero Section */}
            <div className="hero-section">
                <h1>Welcome to Our Website</h1>
                <p>Your one-stop solution for all your needs.</p>
                <button className="cta-button">Get Started</button>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <h2>Our Features</h2>
                <div className="features">
                    <div className="feature">
                        <i className="fas fa-bolt"></i>
                        <h3>Fast</h3>
                        <p>Experience lightning-fast performance and reliability.</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-shield-alt"></i>
                        <h3>Secure</h3>
                        <p>Your data is safe with our top-notch security measures.</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-thumbs-up"></i>
                        <h3>Trusted</h3>
                        <p>Join thousands of satisfied customers worldwide.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2>What Our Clients Say</h2>
                <div className="testimonials">
                    <div className="testimonial">
                        <p>"This service is amazing! Highly recommend it to everyone."</p>
                        <h4>- John Doe</h4>
                    </div>
                    <div className="testimonial">
                        <p>"A game-changer for my business. Exceptional quality and support."</p>
                        <h4>- Jane Smith</h4>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="landing-footer">
                <p>&copy; 2025 Your Company. All rights reserved.</p>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </footer>
        </div>
    );

    const GraphPage = () => {
        // Sample data for the graph
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Monthly Sales',
                    data: [65, 59, 80, 81, 56, 55, 90],
                    borderColor: '#6a1b9a',
                    backgroundColor: 'rgba(106, 27, 154, 0.2)',
                    tension: 0.4, // Smooth curve
                },
            ],
        };

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Monthly Sales Data',
                },
            },
        };

        return (
            <div className={`template ${selectedStyle}`}>
                <div className="graph-container">
                    <h1>Graph Page</h1>
                    <p>Visualize your data with this interactive graph.</p>
                    <div className="graph-card">
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
        );
    };

    // Render the selected structure
    const renderStructure = () => {
        switch (selectedStructure) {
            case 'contact':
                return <ContactPage />;
            case 'input':
                return <InputMenu />;
            case 'landing':
                return <LandingPage />;
            case 'graph':
                return <GraphPage />;
            default:
                return <ContactPage />;
        }
    };

    return (
        <div className="container-fluid">
            <div className="row" style={{ display: 'flex' }}>
                {/* Sidebar Menu */}
                {menuVisible && (
                    <div className="col-md-3 bg-light sidebar p-3">
                        <h2>Template Menu</h2>
                        <div className="controls mb-4">
                            <h4>Select HTML Structure</h4>
                            <button className="btn btn-primary btn-block mb-2" onClick={() => setSelectedStructure('contact')}>Contact Page</button>
                            <button className="btn btn-primary btn-block mb-2" onClick={() => setSelectedStructure('input')}>Input Menu</button>
                            <button className="btn btn-primary btn-block mb-2" onClick={() => setSelectedStructure('landing')}>Landing Page</button>
                            <button className="btn btn-primary btn-block mb-2" onClick={() => setSelectedStructure('graph')}>Graph Page</button>
                        </div>
                        <div className="controls">
                            <h4>Select CSS Style</h4>
                            <button className="btn btn-secondary btn-block mb-2" onClick={() => setSelectedStyle('style1')}>Style 1</button>
                            <button className="btn btn-secondary btn-block mb-2" onClick={() => setSelectedStyle('style2')}>Style 2</button>
                            <button className="btn btn-secondary btn-block mb-2" onClick={() => setSelectedStyle('style3')}>Style 3</button>
                        </div>
                        <button className="btn btn-danger btn-block mt-4" onClick={toggleMenu}>
                            Hide Menu
                        </button>
                    </div>
                )}

                {/* Main Content Area */}
                <div className={menuVisible ? 'col-md-9 p-4' : 'col-md-12 p-4'}>
                    <div className="preview">
                        {renderStructure()}
                    </div>
                    {!menuVisible && (
                        <button className="btn btn-primary toggle-menu-btn" onClick={toggleMenu}>
                            Show Menu
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HtmlCSStemplate;