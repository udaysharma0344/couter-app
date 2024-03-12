import React from 'react'
import { useCounter } from '../Context/CounterContext'

const CounterControls = () => {
    const{increment, decrement}= useCounter();
  return (
    <div>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  ) 
}uday 

export default CounterControls
