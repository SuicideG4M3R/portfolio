import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [showContact, setShowContact] = useState(false);

    const toggleContact = () => {
        setShowContact(!showContact);
    };

    return (
        <header className="header">
            <div className="logo">Robert Szczepański</div>
            <nav className="navbar">
                <a href="/portfolio/" className="active">Home</a>
                <a href="/portfolio/about">About</a>
                <a href="/portfolio/projects">Projects</a>
                <a href="#" onClick={toggleContact}>Contact</a>
            </nav>
            {showContact && (
                <div className="contact-info">
                    <p>My preferred method of contact: </p>
                    <p>suicideg4m3r@gmail.com </p>
                    <button onClick={toggleContact}>X</button>
                </div>
            )}
        </header>
    );
};

export default Header;
