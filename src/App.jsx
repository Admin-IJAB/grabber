import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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

import { HistProvider } from "./lib/js/HistContext.jsx";
import { FocusOnIt } from "./lib/pages/ItemFocus.jsx";

function App() {
  useEffect(() => {
    document.title = "burnthis.space";
  }, []);

  return (
    <>
      <HistProvider>
        <NavRollout />
        <div className="card-deck">
          <h1>https://burnthis.space</h1>
          {/* <HeroFocus /> */}
          <Routes>
            {/* tests */}
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<IndexPage />} />
            {/* <Route path="/index/photo/:albID" element={<SingleFocusPhoto />} />
            <Route path="/index/music/:albID" element={<SingleFocusMusic />} /> */}

            <Route path="/index/photo/:albID" element={<FocusOnIt chapType="photo"/>} />
            <Route path="/index/music/:albID" element={<FocusOnIt chapType="music"/>} />

            {/* nav routes */}
            <Route path="/articles" element={<Articles />} />
            <Route path="/inspo" element={<Inspo />} />
            <Route path="/mp3s/" element={<AllRows />} />
            <Route path="/mp3s/:chapter" element={<AllRows />} />
            <Route path="/pics" element={<AllPanels />} />
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
