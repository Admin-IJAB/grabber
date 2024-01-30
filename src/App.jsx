import { useState } from 'react'
import reactLogo from './lib/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { imgDataObj } from './lib/data/img-meta.jsx'
import { CreatePannels, LoadAllChapters } from './lib/js/Pannels.jsx';
import { NavRollout } from './lib/js/NavRollout.jsx';
import { TestPanels } from './lib/js/TestPanels.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About } from './lib/pages/About.jsx'
import { AllMp3s } from './lib/pages/AllMp3s.jsx'
import { AllPics } from './lib/pages/AllPics.jsx'
import { Home } from './lib/pages/Home.jsx'
import { Notes } from './lib/pages/Notes.jsx'
import { Settings } from './lib/pages/Settings.jsx'

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
        {/* <Router> */}
          <Routes>
            
              <Route path="/" element={<CreatePannels />} />
              <Route path="/test" element={<LoadAllChapters />} />
              <Route path="/boob" element={<TestPanels />} />
              <Route path="/boob/:folder" element={<TestPanels />} />
              <Route path="/about" element={<About />} />
              <Route path="/mp3s/:chapter" element={<AllMp3s />} />
              <Route path="/pics/:chapter" element={<AllPics />} />
              <Route path="/home" element={<Home />} />
              <Route path="/notes/:chapter" element={<Notes />} />
              <Route path="/settings" element={<Settings />} />
            
          </Routes>
        {/* </Router> */}
      </div>
    </>
  )
}

export default App
