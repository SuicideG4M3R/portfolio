import React from "react";
import { Link } from "react-router-dom";

const FunButton = () => {
    const rainbowColors = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d']
    const [funColor, setFunColor] = React.useState(rainbowColors[0]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFunColor(prevColor => {
                const currentIndex = rainbowColors.indexOf(prevColor);
                const nextIndex = (currentIndex + 1) % rainbowColors.length;
                return rainbowColors[nextIndex];
            })
        }, 100);
        return () => clearInterval(interval);
    }, [])

        return (
            <Link 
            to="/fun"
            className="navbar-link5 thq-body-small"
            style={{
                color: `${funColor}`,
                fontWeight: "bold",
            }}>Fun</Link>
)}

export default FunButton;