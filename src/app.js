import React from "react";
import { createRoot } from "react-dom/client";
import './style.css'
import router from "./Router";
import { RouterProvider } from "react-router-dom";


const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;

root.render(<App />);
