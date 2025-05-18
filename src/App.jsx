import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/homepage/homepage'; //May 3rd Correction along w/ line 12
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <HomePage />
    </>
  )
}

export default App
