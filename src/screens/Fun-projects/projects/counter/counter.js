import React from 'react';
import './counter.css';
import OverlayFunProjectPage from '../../overlay';

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [run, setRun] = React.useState(false);
    const [action, setAction] = React.useState(null);

    const Increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const Decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const startAction = (data) => {
        setAction(data);
        setRun(true);
    };
    const stopAction = () => {
        setRun(false);
    };

    React.useEffect(() => {
        if (run) {
            const interval = setInterval(() => {
                if (action === 'increment') {
                    Increment();
                } else if (action === 'decrement') {
                    Decrement();
                }
            }, 10);
            return () => clearInterval(interval);
        }
    }, [run, action]);

    return (
        <OverlayFunProjectPage>
            <div className='counter-comp'>
                <h1>{count}</h1>
                <div className='button-group'>
                    <button type='button' onClick={() => setRun(false)}>Pause</button>
                    <button type='button' onClick={() => setCount(0)}>Reset</button>
                </div>
                <div className='button-group'>

                    <button type='button'
                        onClick={() => {
                            setAction('increment');
                            setRun(true);
                        }}
                    >Auto +</button>

                    <button type='button'
                        onMouseDown={() => startAction('increment')}
                        onTouchStart={() => startAction('increment')}

                        onMouseUp={stopAction}
                        onTouchEnd={stopAction}

                        onClick={Increment}
                    >Hold</button>

                    <button type='button'
                        onClick={() => Increment()}
                    >+</button>



                    <button type='button'
                        onClick={() => Decrement()}
                    >-</button>

                    <button type='button'
                        onMouseDown={() => startAction('decrement')}
                        onTouchStart={() => startAction('decrement')}

                        onMouseUp={stopAction}
                        onTouchEnd={stopAction}

                        onClick={Decrement}
                    >Hold</button>

                    <button type='button'
                        onClick={() => {
                            setAction('decrement');
                            setRun(true);
                        }}
                    >Auto -</button>

                </div>
            </div>
        </OverlayFunProjectPage>
    )
}
export default Counter;