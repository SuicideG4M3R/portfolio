import React from "react";
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
            <>
            <div className="crazy-box" 
            onMouseEnter={changePosition} 
            onClick={changePosition}
            style={{top: position.top, left: position.left}}
            />
            Try to catch it
            </>
    )
}

export default CrazyDiv;