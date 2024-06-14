import React from "react";
import { createRoot } from "react-dom/client";
import './style.css'
import Home from "./screens/home/home";
import About from "./screens/about/about";
import Projects from "./screens/projects/projects";
import  Fun, { DefaultPage } from "./screens/fun/fun";
import { HashRouter, Routes, Route } from "react-router-dom";
import CrazyDiv from "./screens/fun/projects/crazyDiv/crazyDiv";
import Counter from "./screens/fun/projects/counter/counter";


const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="fun" element={<Fun />} >
                    <Route path="" element={<DefaultPage />}/>
                    <Route path="crazy-div" element={<CrazyDiv />}/>
                    <Route path="counter" element={<Counter/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;

root.render(<App />);
