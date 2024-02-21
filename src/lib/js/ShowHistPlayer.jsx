import { Popover } from "@headlessui/react";
import { useState, useEffect } from "react";
import '../styles/history.css'

export const ShowHistPlayer = () => {

    return (
        <Popover className="pop-cont">
            <Popover.Panel className="pop-panel">
            <p>History Player View</p>
                <div>
                    <p>Listening to:</p>
                    <audio controls>
                        <source src="https://forestw70.github.io/sketches-bcc-client/assets/music/amanda-alarm.mp3" type="audio/mpeg"></source>
                    </audio>
                </div>
                <div className="misc-hist">
                    <div>
                        <p>Last viewed pic</p>
                        <img src="../../icons/bblogo1.png" className="hist-pic"></img>
                    </div>
                    <div>
                        <p>Last read article</p>
                        <img src="../../icons/bblogo1.png" className="hist-pic"></img>
                    </div>
                    <div>
                        <p>Last viewed note</p>
                        <img src="../../icons/bblogo1.png" className="hist-pic"></img>
                    </div>
                </div>
            </Popover.Panel>
            <Popover.Button className="pop-btn">PEEK</Popover.Button>
        </Popover>
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