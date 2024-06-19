import React from 'react'
import { Link } from 'react-router-dom'
import './projects-fun.css'

const ProjectsFun = (props) => {
  return (
    <div
      className={`projects-fun-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="projects-fun-max-width thq-section-max-width">
        <div className="projects-fun-content thq-flex-column">
          <ul className="projects-fun-ul thq-flex-column">
            <Link to="/fun" className="">
              <li className="projects-fun-li list-item">
                <h3 className="projects-fun-heading6 thq-heading-3">
                  {props.heading6}
                </h3>
                <p className="thq-body-small">{props.content6}</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

ProjectsFun.defaultProps = {
  content6: 'Box randomly jumping and running away from cursor',
  heading6: 'CrazyDiv// WORK IN PROGRESS',
  rootClassName: '',
}
export default ProjectsFun
