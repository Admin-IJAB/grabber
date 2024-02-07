import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import './lib/styles/App.css'

import { NavRollout } from './lib/js/NavRollout.jsx';
import { About, AllMp3s, AllPics, Home, Notes, Settings, IndexPage } from './lib/pages/_index.jsx'
import { HeroFocus } from './lib/js/HeroFocus';

function App() {

  useEffect(() => {
    document.title = "burnthis.space"
  }, []);

  return (
    <>
      <NavRollout />
      <div className="card-deck">
        <h1>https://burnthis.space</h1>
        {/* <HeroFocus /> */}
          <Routes>
            {/* tests */}
              <Route path="/" element={<Home />} />
              <Route path="/index" element={<IndexPage />} />
              {/* <Route path="/boob" element={<TestPanels />} />
              <Route path="/boob/:folder" element={<TestPanels />} /> */}

            {/* nav routes */}
              <Route path="/about" element={<About />} />
              <Route path="/mp3s/" element={<AllMp3s />} />
              <Route path="/mp3s/:chapter" element={<AllMp3s />} />
              <Route path="/pics" element={<AllPics />} />
              <Route path="/pics/:chapter" element={<AllPics />} />
              <Route path="/home" element={<Home />} />
              <Route path="/notes/" element={<Notes />} />
              <Route path="/notes/:chapter" element={<Notes />} />
              <Route path="/settings" element={<Settings />} />
          </Routes>
      </div>
    </>
  )
}

export default App
