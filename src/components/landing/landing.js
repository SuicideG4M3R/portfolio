import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

const Landing = ({
  name = "Hi, I'm Robert!",
  content = 'Junior Python Developer',
  aboutText = 'A programming enthusiast captivated by the endless possibilities of the coding world. With thirst for experience and knowledge, I tackle challenges with full dedication. Ready for the next adventure in the realm of technology!',
  action1 = 'Check Projects',
  action2 = 'About me',
}) => {
  return (
    <div className="thq-section-padding">
      <div className="landing-max-width thq-section-max-width">
        <div className="thq-flex-row landing-container">
          <div className="landing-column">
            <div className="landing-content">
              <h1 className="thq-heading-1 landing-heading1">{name}</h1>
              <h2 className="thq-heading-2 landing-content1">
                {content}
              </h2>
              <p className="thq-body-large landing-content11">
                {aboutText}
              </p>
            </div>
            <div className="landing-actions">
              <Link to="/projects" className="landing-button thq-button-filled"><span className="thq-body-small">{action1}</span></Link>
              <Link to="/about" className="landing-button1 thq-button-outline"><span className="thq-body-small">{action2}</span></Link>
            </div>
          </div>
          <div className="landing-container1">
            <div className="landing-image1 profile-photo"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
