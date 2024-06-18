import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = (props) => {
  return (
    <header className={`navbar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <span className="navbar-text">{props.text}</span>
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"
                className=""
              ></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="navbar-icon2">
              <path
                d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"
                className=""
              ></path>
            </svg>
            <Link to="/" className="navbar-link1 thq-body-small thq-link">{props.link1}</Link>
            <Link to="/about" className="navbar-link2 thq-body-small thq-link">{props.link2}</Link>
            <Link to="/projects" className="navbar-link3 thq-body-small thq-link">{props.link3}
            </Link>
            <span className="thq-body-small thq-link">{props.link4}</span>
            <Link to="/fun" className="navbar-link5 thq-body-small thq-link">{props.link5}</Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon4">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon6">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <Link to="/" className="navbar-link11 thq-body-small thq-link">{props.link11}</Link>
              <Link to="/about" className="navbar-link21 thq-body-small thq-link">{props.link21}</Link>
              <Link to="/projects" className="navbar-link31 thq-body-small thq-link">{props.link31}</Link>
              <span className="thq-body-small thq-link">{props.link41}</span>
              <Link to="/fun" className="navbar-link51 thq-body-small thq-link">{props.link51}</Link>
            </nav>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  link11: 'Home',
  link51: 'Fun',
  rootClassName: '',
  link3: 'Projects',
  link2: 'About',
  link5: 'Fun',
  link31: 'Projects',
  link21: 'About',
  link1: 'Home',
  text: 'Robert Szczepański',
  link4: 'Contact',
  link41: 'Contact',
}

export default Navbar
