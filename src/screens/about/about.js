import React from "react";
import "./about.css";
import Header from "../../components/header/header";

const About = () => {
    return (
        <div>
            <Header />
            <div className="container-about">

                <span>
                    <label>Programming languages: </label><div>Python, JavaScript</div>
                </span>

                <span>
                    <label>Frameworks: </label><div>Django, Flask</div>
                </span>
                
                <span>
                    <label>IDE: </label><div>Pycharm, WebStorm, Visual Studio</div>
                </span>

                <span>
                    <label>Operating system: </label><div>Windows, Linux</div>
                </span>

                <span>
                    <label>Others: </label><div>HTML, CSS, PostgreSQL, SQL, GitHub, REST API, Agile, Docker, Unit Tests</div>
                </span>

                <span>
                    <label>Courses: </label>
                    <p>Coders Lab - Python Developer (completed)</p>
                    <p>Coders Lab - SCRUMLAB (completed)</p>
                    <p>Coders Lab -  JavaScript Specialist: React + Redux (in progress)</p>
                </span>

                <span>
                    <label>Something about me :</label><br />
                    <div>Location :</div><i class='bx bx-current-location'></i> Warsaw<br />
                    <div>Hobby :</div>Mechanics, Programming, Sci-Fi movies, RPG, games, Chess, Cycling<br />
                    <div>Languages :</div>English - B1 | Polish - Native<br />
                    <div>Currently :</div>
                    Working on this project, I'm planning add some "fun" endpoint where I'll make something more REACT advanced than plain txt and css like it is now<br />
                    <div></div>Also practicing use of Express along with typescript and prisma (Check it out! ---> <a href="https://github.com/SuicideG4M3R/ChangelogPK"><i class='bx bx-link'></i></a> )
                </span>
            </div>
        </div>
    );
};

export default About;