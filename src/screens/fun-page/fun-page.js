import React from 'react'
import './fun-page.css'
import FunProjectList from './funProjectsList.js'

const FunPage = () => {
  return (
    <div className="fun-page-container">
      <div className='projects-fun-container thq-section-padding'>
        <div className="projects-fun-max-width thq-section-max-width">
          <div className="projects-fun-content thq-flex-column">
            <FunProjectList />
          </div>
        </div>
      </div>
    </div>
  )
}
export default FunPage
