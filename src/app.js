import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import '../public/assets/style/style.css';
import Navbar from "./components/navbar/navbar.js";
import LandingPage from './screens/landing-page/landing-page.js'
import AboutPage from './screens/about-page/about-page.js'
import ProjectsPage from './screens/projects-page/projects-page.js'
import FunPage from './screens/fun-page/fun-page.js'

import NotFound from './screens/not-found/not-found.js'
import CrazyDiv from "./screens/Fun-projects/projects/crazyDiv/crazyDiv.js";
import Counter from "./screens/Fun-projects/projects/counter/counter.js";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="about" element={<AboutPage/>} />
                <Route path="projects" element={<ProjectsPage/>} />
                <Route path="fun" element={<FunPage/>}/>
                <Route path="fun/crazy-div" element={<CrazyDiv/>} />
                <Route path="fun/counter" element={<Counter/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </HashRouter>
    );
};

export default App;

root.render(<App />);
