import React from 'react'
import Navbar from '../../components/navbar/navbar.js'
import FunProjectTemplate from '../../components/fun-project-template/fun-project-template.js'
import './fun-project-page.css'

const FunProjectPage = () => {
  return (
    <div className="fun-project-page-container">
      <Navbar rootClassName="navbar-root-class-name4"></Navbar>
      <FunProjectTemplate></FunProjectTemplate>
    </div>
  )
}

export default FunProjectPage
