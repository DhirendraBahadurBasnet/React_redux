import { useState } from 'react'
import './App.css'
import {useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './Reduxtoolkit/CounterSlice'

function App() {
const mystate = useSelector((state)=> state.counter.value)//action name + initial value
const dispatch = useDispatch()
  return (
    <>
    <input type="text" value={mystate} />
    <button onClick={()=> dispatch(increment())}>Plus</button>
    <button onClick={()=> dispatch(decrement())}>Minus</button>
    </>
  )
}

export default App
