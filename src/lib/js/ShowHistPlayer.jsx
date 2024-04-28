import { Popover } from "@headlessui/react";
import { useState, useEffect } from "react";

import { useHistory } from "../js/HistContext";

import '../styles/historyMod.css'

export const MediaPlayer = () => {
    const { history, updateHistory } = useHistory();
    return (
        <Popover className="media-container">
            <Popover.Button className="peek-btn">PEEK</Popover.Button>
            <Popover.Panel className="media-panel">
                <p>~History~</p>
                <div className="the-latest">
                    <p className="media-label">Now playing: {history[0].iName}</p>
                    <audio controls>
                        <source src={`../../assets/music/${history[0].fUrl}/${history[0].sUrl}`} type="audio/mpeg"></source>
                    </audio>
                    <p className="media-label">Last Viewed: {history[1].iName}</p>
                    <img className="hero-pic" src={`../../assets/icons/${history[1].aUrl}`}></img>
                </div>
                <p>Viewed last</p>
                <div className="the-history">
                    {history.map(item => {
                        return (
                            <div key={item.iName}>
                                <img className="history-pic" src={`../../assets/icons/${item.aUrl}`}></img>
                                <span key={item.iName}>{item.iName}</span>
                            </div>
                        )
                    })}
                </div>
            </Popover.Panel>
        </Popover>
    )
}

export const ShowHistPlayer = ({ allHistory }) => {
    const { history, updateHistory } = useHistory();
    return (
        <>
            <Popover className="pop-cont">
                <Popover.Button className="pop-btn">PEEK</Popover.Button>
                <Popover.Panel className="pop-panel">

                    {/* <p>History</p> */}

                    <div className="mp3-hist hist-sec">
                        <p className="hist-label">MP3</p>
                        <audio controls>
                            <source src={`../../assets/music/${history[0].fUrl}/${history[0].sUrl}`} type="audio/mpeg"></source>
                        </audio>
                    </div>
                    <div>
                        <p className="hist-label">hist test</p>

                        {history.map(item => {
                            return <span key={item.iName}>{item.iName}</span>
                        })}
                    </div>

                    {/* <div className="pic-hist hist-sec">
                        <p className="hist-label">JPEG </p>
                        <div className="pic-box">
                            <img src="../../assets/icons/auth_lukasz-mauro.jpg" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra1.png" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra2.png" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra3.png" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra4.png" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra7.png" className="pic-prvw"></img>
                        </div>

                    </div> */}
                </Popover.Panel>

            </Popover>
            {/* <div>
                <p>Now playing:</p>
            </div> */}
        </>
    )



    // const [ hModOn, sethModOn ] = useState(false);
    // useEffect(() => {

    // }, [sethModOn])

    // const toggleHist = () => {
    //     document.getElementById("histModal").classList.toggle("showing")
    // }
    // return (
    //     <>
    //         <button onClick={() => sethModOn(true)}>SHOW</button>
    //         <div id="histModal" className={hModOn ? "showing" : ""}>
    //             <p>TEST</p>
    //             <button>CLOSE</button>
    //         </div>
    //     </>
    // )
}