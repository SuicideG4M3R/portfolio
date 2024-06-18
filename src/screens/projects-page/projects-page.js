import React from 'react'
import Navbar from '../../components/navbar/navbar.js'
import Projects from '../../components/projects/projects.js'
import './projects-page.css'

const ProjectsPage = (props) => {
  return (
    <div className="projects-page-container">
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <Projects></Projects>
    </div>
  )
}

export default ProjectsPage
