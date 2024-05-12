import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './style.css'
import Home from "./screens/home/home";
import Projects from "./screens/projects/projects";
import About from "./screens/about/about";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/portfolio/" element={<Home />} />
                <Route exact path="/portfolio/about" element={<About />} />
                <Route exact path="/portfolio/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
};

export default App;

root.render(<App />);
