import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./lib/styles/App.css";

import { NavRollout } from "./lib/js/NavRollout.jsx";
import {
  Articles,
  Inspo,
  AllRows,
  AllPanels,
  Home,
  Notes,
  Settings,
  IndexPage,
} from "./lib/pages/_index.jsx";
import { HeroFocus } from "./lib/js/HeroFocus";
import { SingleFocusMusic, SingleFocusPhoto } from "./lib/pages/ItemFocus.jsx";
import { HistProvider } from "./lib/js/HistContext.jsx";
import { ShowHistPlayer } from "./lib/js/showHistPlayer.jsx";

function App() {
  // const [allHistory, setAllHistory] = useState([
  //   {
  //     iName: "S. Finder - 0 Dayz",
  //     url: "1_sf_0-dayz.mp3",
  //     media: "music",
  //   },
  //   {
  //     iName: "F. W - chess",
  //     url: "Valle-8.JPG",
  //     media: "photo",
  //   }
  // ]

  // );

  useEffect(() => {
    document.title = "burnthis.space";
  }, []);

  return (
    <>
      <HistProvider>
        <NavRollout />
        <div className="card-deck">
          {/* <ShowHistPlayer /> */}
          <h1>https://burnthis.space</h1>
          {/* <HeroFocus /> */}
          <Routes>
            {/* tests */}
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<IndexPage />} />
            <Route path="/index/photo/:albID" element={<SingleFocusPhoto />} />
            <Route path="/index/music/:albID" element={<SingleFocusMusic />} />

            {/* nav routes */}
            <Route path="/articles" element={<Articles />} />
            <Route path="/inspo" element={<Inspo />} />
            <Route path="/mp3s/" element={<AllRows />}
            />
            <Route path="/mp3s/:chapter" element={<AllRows />} />
            <Route path="/pics" element={<AllPanels />}
            />
            <Route path="/pics/:chapter" element={<AllPanels />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notes/" element={<Notes />} />
            <Route path="/notes/:chapter" element={<Notes />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </HistProvider>
    </>
  );
}

export default App;
