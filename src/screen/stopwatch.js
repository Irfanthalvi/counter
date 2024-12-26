import React, { useState } from 'react'

const Stopwatch = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='bigbox'>
            <div className='box'>
                <h1 className='hadding'>Counter app</h1>
                <h2 className='result'>{count}</h2>
                <div className='container'>
                    <button className='secoundbtn' title='Decrement' onClick={() => setCount(count - 1)}disabled={count===0}  >Decrement</button>
                    <button className='resectbtn' onClick={() => setCount(0)}>reset</button>
                    <button className='firstbtn' title='Increment' onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch
