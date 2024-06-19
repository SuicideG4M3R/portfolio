import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="landing-max-width thq-section-max-width">
        <div className="thq-flex-row landing-container">
          <div className="landing-column">
            <div className="landing-content">
              <h1 className="thq-heading-1 landing-heading1">{props.name}</h1>
              <h2 className="thq-heading-2 landing-content1">
                {props.content12}
              </h2>
              <p className="thq-body-large landing-content11">
                {props.aboutText}
              </p>
            </div>
            <div className="landing-actions">
              <Link to="/projects" className="landing-button thq-button-filled"><span className="thq-body-small">{props.action1}</span></Link>
              <Link to="/about" className="landing-button1 thq-button-outline"><span className="thq-body-small">{props.action2}</span></Link>
            </div>
          </div>
          <div className="landing-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="landing-image1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Landing.defaultProps = {
  name: "Hi, I'm Robert!",
  content12: 'Junior Python Developer',
  aboutText:
    'A programming enthusiast captivated by the endless possibilities of the coding world. With thirst for experience and knowledge, I tackle challenges with full dedication. Ready for the next adventure in the realm of technology!',
  action1: 'Check Projects',
  action2: 'About me',
  image1Alt: 'profile-picture',
  image1Src: '../../../public/assets/img/profile_rotated.jpg',
}

export default Landing
