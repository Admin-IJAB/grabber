import { useState } from 'react'
import reactLogo from './lib/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { imgDataObj } from './lib/data/img-meta.jsx'
import { CreatePannels } from './lib/js/Pannels.jsx'

function App() {
  const [count, setCount] = useState(0)

  const NavRollout = () => {
    const navOps = ["index", "home", "pics", "mp3s", "notes", "about", "settings"];

    const justPickOne = navOps.map((op, idx) => (
      <li key={idx}><button key={op} className={op} onClick={() => console.log(`${op}-nBtn`)}>
        {op}
      </button></li>
    ))
    return (
      <ul className='nav-btns'>
        {justPickOne}
      </ul>
    )
  }

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
          <CreatePannels />

        </div>
      </div>
    
    </>
  )
}

export default App
