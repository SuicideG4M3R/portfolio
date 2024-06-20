import React from "react";
import OverlayFunProjectPage from "../../overlay.js";
import './CrazyDiv.css'

const CrazyDiv = () => {
    const [position, setPosition] = React.useState({top: '50%', left: '50%'})

    const changePosition = () => {
        setPosition({
            top: Math.floor(Math.random() * 80) + '%',
            left: Math.floor(Math.random() * 80) + '%'
        })
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            changePosition();
        }, 2000);
        return () => clearInterval(interval);
    })

    return (
            <OverlayFunProjectPage>
            <div className="crazy-box" 
            onMouseEnter={changePosition} 
            onClick={changePosition}
            style={{top: position.top, left: position.left}}
            />
            </OverlayFunProjectPage>
    )
}

export default CrazyDiv;