import React from 'react'
import Navbar from '../../components/navbar/navbar.js'
import About from '../../components/about/about.js'
import './about-page.css'

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <About></About>
    </div>
  )
}

export default AboutPage
