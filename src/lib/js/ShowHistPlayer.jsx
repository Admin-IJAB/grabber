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
                    <div>
                        <p className="media-label">Now playing</p>
                        <audio controls>
                            <source src={`../../assets/music/${history[0].fUrl}/${history[0].sUrl}`} type="audio/mpeg"></source>
                        </audio>
                        <p className="media-label"> {history[0].iName}</p>
                        <div className="mp3-queue">
                            <p>QUEUE</p>
                            {/* Div for last 5 songs */}
                        </div>
                    </div>
                    <div>
                        <p className="media-label">Last Viewed</p>
                        <img className="hero-pic" src={`../../assets/icons/${history[1].aUrl}`}></img>
                        <p>{history[1].iName}</p>
                    </div>
                </div>
                <p>Viewed last</p>
                <div className="the-history">
                    {history.map((item, idx) => {
                        return (
                            <div className="hist-prvw" key={item.fUrl + idx}>
                                <img className="history-pic" src={`../../assets/icons/${item.aUrl}`}></img>
                                <p className="prvw-label" key={item.iName}>{item.iName.split(" - ")[0]}</p>
                                <p>{item.iName.split(" - ")[1]}</p>
                            </div>
                        )
                    })}
                </div>
            </Popover.Panel>
        </Popover>
    )
}

