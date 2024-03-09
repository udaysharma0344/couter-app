import React from 'react'
import { useCounter } from '../Context/CounterContext'

const CounterDisplay = () => {
    const {count} = useCounter();
  return (
    <div className='container'>
      <h1>Display Counter: {count}</h1>
    </div>
  )
}

export default CounterDisplay
