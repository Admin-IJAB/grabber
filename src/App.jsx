import { useState } from 'react'
import reactLogo from './lib/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { imgDataObj } from './lib/data/img-meta.jsx'
import { CreatePannels } from './lib/js/Pannels.jsx'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <div>
  
        <a href="https://burnthis.space" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Grabber</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          <CreatePannels />

        </div>
      </div>
    
    </>
  )
}

export default App
