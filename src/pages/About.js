import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div ref={aboutRef} className="container">
            <section style={{border: '1px solid #ccc', borderRadius: '10px', paddingLeft: '20px',paddingRight: '20px',paddingBottom: '30px',paddingTop:'30px'}}>
                <h1 style={{ textAlign: 'center' }}>About Us</h1>

                <div className="about-content text-center max-w-2xl mx-auto mt-5">
                    <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">We love our customers!</h2>
                    <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                        obcaecati eum est commodi, quam, ut quidem deleniti quos quod temporibus
                        dicta deserunt voluptates ab! Deleniti id repellat, labore fugiat
                        obcaecati dolorem minima fugit quasi nam velit reiciendis delectus ea
                        tempora.
                    </p>

                    <Link to="/contact">
                        <button style={{ backgroundColor: 'Black', padding: '10px 30px' }} className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</button>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default About;
