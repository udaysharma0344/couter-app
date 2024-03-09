import React, { createContext, useContext, useState } from 'react'

const CounterContext = createContext();
export const useCounter = ()=> useContext(CounterContext);


export const CounterProvider = ({children}) => {
const [count, setCount] = useState(0);

const increment = () =>{
    setCount((prev) => {
        return prev + 1;
    })gf
}

const decrement = () => {
    setCount((prev)=>{
        return prev-1;
    })
}
return(
    <CounterContext.Provider value={{count , increment, decrement}}>
        {children}
    </CounterContext.Provider>
)
}