import { useState } from 'react'
import reactLogo from './lib/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { imgDataObj } from './lib/data/img-meta.jsx'
import { CreatePannels, LoadAllChapters } from './lib/js/Pannels.jsx'
import { NavRollout } from './lib/js/NavRollout.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [activeChap, setChapter] = useState("pics") 

  return (
    <>
      <div className='nav-deck'>
  
        <a href="https://burnthis.space" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <NavRollout />
        
      </div>

      <div className="card-deck">
      <h1>Grabber</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          <LoadAllChapters />

        </div>
      </div>
    
    </>
  )
}

export default App
