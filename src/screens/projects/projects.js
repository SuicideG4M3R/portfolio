import React from 'react';
import Header from "../../components/header/header";
import "./projects.css"
const Projects = () => {
        return (
            <div>
                <Header />
                <div className="cont-pro">
                        <ul>
                        <li className="game-stats">
                                <span>Game Stats
                                        <p>Django Python SQL HTML/CSS JavaScript</p>
                                </span>
                                <a href="https://github.com/SuicideG4M3R/GameStats">Check out on GitHub</a>
                        </li>
                        <li className="charity-donations">
                                <span>Charity Donations
                                        <p>Django Python SQL HTML/CSS JavaScript</p>
                                </span>
                                <a href="https://github.com/SuicideG4M3R/CharityDonations">Check out on GitHub</a>
                        </li>
                        <li className="no-image">
                                <span>WebScrapperPY
                                        <p>Python</p>
                                </span>
                                <a href="https://github.com/SuicideG4M3R/WebScrapperPY">Check out on GitHub</a>
                        </li>
                        <li className="portfolio">
                                <span>Portfolio
                                        <p>React JavaScript HTML/CSS</p>
                                </span>
                                <a href="https://github.com/SuicideG4M3R/portfolio">Check out on GitHub</a>
                        </li>
                        </ul>
                </div>
            </div>
        )

}

export default Projects;