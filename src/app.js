import React from "react";
import { createRoot } from "react-dom/client";
import './style.css'
import Home from "./screens/home/home";
import About from "./screens/about/about";
import Projects from "./screens/projects/projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";


const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

root.render(<App />);
