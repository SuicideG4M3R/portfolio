import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './style.css'
import Home from "./screens/home/home";
import Portfolio from "./screens/portfolio/portfolio";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
    );
};

export default App;

root.render(<App />);
