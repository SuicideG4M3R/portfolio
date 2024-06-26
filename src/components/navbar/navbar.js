import React from 'react'
import { Link } from 'react-router-dom'
import FunButton from './funButton.js';
import { darkThemeStyles, lightThemeStyles } from './themes.js'
import './navbar.css'

const Navbar = ({
  name  = 'Robert Szczepański',
  link1 = 'Home',
  link2 = 'About',
  link3 = 'Projects',
  link4 = 'Contact',
}) => {
  const [isVisible, setisVisible] = React.useState(false);
  const [theme, setTheme] = React.useState('dark'); // standart theme dark | light
  const [showContact, setShowContact] = React.useState(false);

  const toggleContact = () => {
      setShowContact(!showContact);
  };

  React.useEffect(() => {
    const styles = document.getElementById('custom-style')
    styles.innerText = theme === 'dark' ? darkThemeStyles : lightThemeStyles;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <header className='navbar-container'>
      <style id='custom-style'></style>
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <span className="navbar-text">{name}</span>
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links">
            <svg viewBox="0 0 1024 1024" onClick={toggleTheme} className="navbar-icon2">
              <path
                d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"
                className=""
              ></path>
            </svg>
            <Link to="/" className="navbar-link1 thq-body-small thq-link">{link1}</Link>
            <Link to="/about" className="navbar-link2 thq-body-small thq-link">{link2}</Link>
            <Link to="/projects" className="navbar-link3 thq-body-small thq-link">{link3}</Link>
            {/* <Link to="#" className="thq-body-small thq-link">{link4}</Link> */}
            <FunButton />
          </nav>
        </div>
        <div data-thq="thq-burger-menu"  className="navbar-burger-menu">
        <svg viewBox="0 0 1024 1024" style={{margin: '0 30px 0 0'}} onClick={toggleTheme} className="navbar-icon2">
              <path
                d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"
                className=""
              ></path>
            </svg>
          <svg onClick={() => setisVisible(true)} viewBox="0 0 1024 1024" className="navbar-icon4">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className={`navbar-mobile-menu${isVisible? ' teleport-show thq-show thq-translate-to-default' : ''}`}>
          <div className="navbar-nav">
            <div className="navbar-top">
              <div data-thq="thq-close-menu" onClick={() => setisVisible(false)} className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon6">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <Link to="/" className="navbar-link11 thq-body-small thq-link">{link1}</Link>
              <Link to="/about" className="navbar-link21 thq-body-small thq-link">{link2}</Link>
              <Link to="/projects" className="navbar-link31 thq-body-small thq-link">{link3}</Link>
              {/* <Link to="#" className="thq-body-small thq-link">{link4}</Link> */}
              <FunButton />
            </nav>
          </div>
        </div>
      </header>
    </header>
  )
}

export default Navbar
