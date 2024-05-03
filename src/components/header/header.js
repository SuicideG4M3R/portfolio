import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Robert Szczepański</div>
            <nav className="navbar">
                <a href="/" className="active">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Portfolio</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;