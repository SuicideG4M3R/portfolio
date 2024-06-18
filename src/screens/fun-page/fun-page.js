import React from 'react'
import Navbar from '../../components/navbar/navbar.js'
import ProjectsFun from '../../components/projects-fun/projects-fun.js'
import './fun-page.css'

const FunPage = () => {
  return (
    <div className="fun-page-container">
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <ProjectsFun rootClassName="projects-fun-root-class-name"></ProjectsFun>
    </div>
  )
}

export default FunPage
