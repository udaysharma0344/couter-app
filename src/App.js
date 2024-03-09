import React from 'react'
import CounterControls from './Components/CounterControls'
import CounterDisplay from './Components/CounterDisplay'
import { CounterProvider } from './Context/CounterContext'

const App = () => {
  return (
    <CounterProvider>
      <div>
        <h1>Counter App</h1>
        <CounterControls/>
        <CounterDisplay/>
      </div>
    </CounterProvider>
  )
}

export default App
