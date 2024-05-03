import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './style.css'
import Home from "./screens/home/home";
import Projects from "./screens/projects/projects";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
};

export default App;

root.render(<App />);
