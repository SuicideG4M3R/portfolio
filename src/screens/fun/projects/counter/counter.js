import React from 'react';
import './counter.css';

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [mouse, setMouse] = React.useState(false);
    const [action, setAction] = React.useState(null);

    const Increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const Decrement = () => {
        setCount(prevCount => prevCount - 1);
    }
    const handleMouseDown = (data)=> {
        setAction(data);
        setMouse(true);
    };
    const handleMouseUp = ()=> {
        setMouse(false);
    };

    React.useEffect(() => {
        if (mouse){
            const interval = setInterval(() => {
            if (action === 'increment'){
                Increment();
            } else if (action === 'decrement'){
                Decrement();
            }
        }, 10);
        return () => clearInterval(interval);
        }
    }, [mouse, action]);

    return(
        <div className='counter-comp'>
            <h1>{count}</h1>
            <button 
                onMouseDown={() => handleMouseDown('increment')}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // prevents counter running if mouse will click and leave skipping onMouseUp 
                onClick={Increment}
            >Increment</button>
            <button 
                onMouseDown={() => handleMouseDown('decrement')}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp} // prevents counter running if mouse will click and leave skipping onMouseUp 
                onClick={Decrement}
            >Decrement</button>
        </div>
    )
}
export default Counter;