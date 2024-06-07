import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import FunButton from '../fun/funButton';

const Header = () => {
    const [showContact, setShowContact] = React.useState(false);

    const toggleContact = () => {
        setShowContact(!showContact);
    };

    return (
        <header className="header">
            <div className="logo">Robert Szczepański</div>
            <nav className="navbar">
                <Link to="/" className='active'>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="#" onClick={toggleContact}>Contact</Link>
                <FunButton />
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
