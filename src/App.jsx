import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center my-5'>Counter App</h1>
      <div style={{minHeight:'70vh'}} className='d-flex justify-content-center align-items-center w-100'>
      <Counter/>
      </div>
    </>
  )
}

export default App
