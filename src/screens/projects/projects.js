import React from 'react';
import Header from "../../components/header/header";
import "./projects.css"
const Projects = () => {
        return (
            <div>
                <Header />
                <section className="portfolio">
                        <div className="container">
                                <ul>
                                        <li className="game-stats"><span> TXT </span><p> Hello </p><a href="https://github.com/SuicideG4M3R">Zobacz projekt na GitHubie</a></li>
                                        <li className="charity-donations"><a href="https://github.com/SuicideG4M3R">Zobacz projekt na GitHub</a></li>
                                        <li className="charity-donations"><a href="https://github.com/SuicideG4M3R">Zobacz projekt na GitHub</a></li>
                                        <li className="charity-donations"><a href="https://github.com/SuicideG4M3R">Zobacz projekt na GitHub</a></li>
                                </ul>
                        </div>
                </section>
            </div>
        )

}

export default Projects;