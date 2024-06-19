import React from 'react'
import './fun-project-template.css'

const FunProjectTemplate = (props) => {
  return (
    <div className="fun-project-template-header5">
      <div className="fun-project-template-container">
        <img
          alt={props.heroImgBackgroundAlt}
          src={props.heroImgBackgroundSrc}
          className="fun-project-template-image"
        />
      </div>
    </div>
  )
}

FunProjectTemplate.defaultProps = {
  heroImgBackgroundSrc:
    'https://images.unsplash.com/photo-1639431682289-72b9ebb75895?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxjb2RlfGVufDB8fHx8MTcxODcxODMzNXww&ixlib=rb-4.0.3&w=1500',
  heroImgBackgroundAlt: 'Robert Szczepański - Junior Python Developer',
}
export default FunProjectTemplate
