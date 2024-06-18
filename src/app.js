import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import './style.css'
import AboutPage from './screens/about-page/about-page.js'
import ProjectsPage from './screens/projects-page/projects-page.js'
import LandingPage from './screens/landing-page/landing-page.js'
import FunPage from './screens/fun-page/fun-page.js'
import FunProjectPage from './screens/fun-project-page/fun-project-page.js' // heres project page
import NotFound from './screens/not-found/not-found.js' // not found

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="about" element={<AboutPage/>} />
                <Route path="projects" element={<ProjectsPage/>} />
                <Route path="fun" element={<FunPage/>} />
            </Routes>
        </HashRouter>
    );
};

export default App;

root.render(<App />);
