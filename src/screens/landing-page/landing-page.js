import React from 'react'
import Landing from '../../components/landing/landing.js'
import BasicFooter from '../../components/basic-footer/basic-footer.js'
import './landing-page.css'

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Landing />
      <BasicFooter />
    </div>
  )
}

export default LandingPage
