import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flatten from './Flatten'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Flatten></Flatten>
   </>
  )
}

export default App
