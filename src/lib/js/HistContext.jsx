import { useState, createContext, useContext } from "react";

export const HistContext = createContext();

// export const useHistCntxt = useContext(HistContext)

export const HistProvider = (props) => {
    const [ history, setHistory ] = useState({
        mp3: [],
        jpg: [],
    });

    return (
        <HistContext.Provider value={history} {...props} /> 
    )
}

// export default HistProvider;