import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';
import Userdetails from './components/Userdetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Userdetails/>
   
    </>
  )
}

export default App
