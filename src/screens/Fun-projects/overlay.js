import React from 'react'
import './overlay.css'

const OverlayFunProjectPage = ({children}) => {
  return (
    <div className="fun-project-page-container">
      <div className="fun-project-template-header5">
        <div className="fun-project-template-container">
          <div className="fun-project-template-image">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverlayFunProjectPage
