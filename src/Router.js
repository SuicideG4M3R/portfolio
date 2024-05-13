import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/home/home";
import About from "./screens/about/about";
import Projects from "./screens/projects/projects";


const router = createBrowserRouter([
    {
        path: "/portfolio/",
        element: <Home />,
    },
    {
        path: "/portfolio/about",
        element: <About />,
    },
    {
        path: "/portfolio/projects",
        element: <Projects />,
    },
    {
        path: "*",
        element: <p>404 Error - Nothing here...</p>,
    }
])

export default router;