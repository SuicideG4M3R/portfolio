import React from "react";
import './fun.css'
import Header from "../../components/header/header";
import { Link, Outlet } from "react-router-dom";

export const DefaultPage = () => {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

const Fun = () => {
    return (
        <div>
            <Header />
            <div className="cont-fun">
                <ul>
                    <li><Link to="crazy-div">CrazyDiv</Link></li>
                    <li><Link to="counter">Counter</Link></li>
                </ul>    
            </div>
            <div className="cont-fun-pro">
                <Outlet />
            </div>
            
        </div>
    )
}

export default Fun;