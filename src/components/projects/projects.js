import React from 'react'
import './projects.css'

const Projects = (props) => {
  return (
    <div className="projects-layout349 thq-section-padding">
      <div className="projects-max-width thq-section-max-width">
        <div className="projects-container thq-grid-auto-300 thq-grid-3">
          <div className="projects-card thq-card thq-flex-column">
            <img
              alt={props.alt}
              src={props.src}
              className="projects-image thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="projects-text thq-heading-2">GameStats</h2>
            <span className="projects-text01 thq-body-small">
              Django Python SQL HTML/CSS JavaScript
            </span>
          </div>
          <div className="projects-card1 thq-card thq-flex-column">
            <img
              alt={props.alt}
              src={props.src}
              className="projects-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="projects-text02 thq-heading-2">Charity Donations</h2>
            <span className="projects-text03 thq-body-small">
              Django Python SQL HTML/CSS JavaScript
            </span>
          </div>
          <div className="projects-card2 thq-card thq-flex-column">
            <img
              alt={props.alt}
              src={props.src}
              className="projects-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="projects-text04 thq-heading-2">WebScrapperPY</h2>
            <span className="projects-text05 thq-body-small">
              <span>Python</span>
              <br></br>
            </span>
          </div>
          <div className="projects-card3 thq-card thq-flex-column">
            <img
              alt={props.alt}
              src={props.src}
              className="projects-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="projects-text08 thq-heading-2">
              <span>Portfolio</span>
              <br></br>
            </h2>
            <span className="projects-text11 thq-body-small">
              React JavaScript HTML/CSS
            </span>
          </div>
          <div className="projects-card4 thq-card thq-flex-column">
            <img
              alt={props.alt}
              src={props.src}
              className="projects-image4 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="projects-text12 thq-heading-2">FlaskCRUD</h2>
            <span className="projects-text13 thq-body-small">
              Flask Python SQLAlchemy
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Projects.defaultProps = {
  src: '../../../public/assets/img/img4-1400w.png',
  alt: 'Project Portfolio Image'
}

export default Projects
