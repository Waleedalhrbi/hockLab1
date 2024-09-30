import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculit from './combonent/Calculit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculit></Calculit>
    </>
  )
}

export default App
