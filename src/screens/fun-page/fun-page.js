import React from 'react'
import { Link } from 'react-router-dom'
import './fun-page.css'

const FunPage = ({
  content = 'Box randomly jumping and running away from cursor',
  heading = 'CrazyDiv// WORK IN PROGRESS',
}) => {
  return (
    <div className="fun-page-container">
      <div className='projects-fun-container thq-section-padding'>
        <div className="projects-fun-max-width thq-section-max-width">
          <div className="projects-fun-content thq-flex-column">
            <ul className="projects-fun-ul thq-flex-column">
              <Link to="/fun" className="">
                <li className="projects-fun-li list-item">
                  <h3 className="projects-fun-heading6 thq-heading-3">
                    {heading}
                  </h3>
                  <p className="thq-body-small">{content}</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FunPage
