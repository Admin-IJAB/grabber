import { useState, createContext, useContext } from "react";

export const HistContext = createContext();

export const HistProvider = ({ children }) => {
    const [ history, setHistory ] = useState([
        {
          iName: "S. Finder - 0 Dayz",
          fUrl: "2024_SF-NO",
          sUrl: "1_sf_0-dayz.mp3",
          aUrl: "aa_sf_no.jpg",
          media: "music",
        },
        {
          iName: "FW - chess",
          fUrl: "2099_FW-VALLE1",
          sUrl: "Valle-8.JPG",
          aUrl: "xxtra1.png",
          media: "pictures",
        }
      ]);

      const updateHistory = (item) => {
        setHistory([item, ...history])
      }

    return (
        <HistContext.Provider value={{ history, updateHistory }}>
            {children}
        </HistContext.Provider>
    )
}

export const useHistory = () => useContext(HistContext);