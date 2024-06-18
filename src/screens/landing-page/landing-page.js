import React from 'react'
import Navbar from '../../components/navbar/navbar.js'
import Landing from '../../components/landing/landing.js'
import BasicFooter from '../../components/basic-footer/basic-footer.js'
import './landing-page.css'

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <Landing></Landing>
      <BasicFooter></BasicFooter>
    </div>
  )
}

export default LandingPage
