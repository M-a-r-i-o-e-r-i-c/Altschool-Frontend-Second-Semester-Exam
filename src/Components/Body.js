import React from 'react'
import './Body.css'
import useCounter from '../Pages/useCounter'


const Body = () => {
  const [state, dispatch, increment, decrement, setValue, reset] = useCounter()

  return (
    <div className='middle'>
      <h1> Counter app created with the useCounter custom hook</h1>
       <h2>{state.count}</h2>

       <div className= 'icons'>
       <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

       </div>
       
        <div className='search-bar'>
            <input type='number' id='set' value={state.value} onChange={(e)=>{dispatch({type:'addValue', payload:e.target.value})}} placeholder='Enter a number'/>

        </div>
        <div className='icons'>
        <button onClick ={setValue}>Set Value</button>
          <button onClick={reset}> Reset</button>
          
          
        </div>
    </div>
  )
}

export default Body