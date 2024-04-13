import { Popover } from "@headlessui/react";
import { useState, useEffect } from "react";
import '../styles/historyMod.css'

export const ShowHistPlayer = () => {

    return (
        <>

            <Popover className="pop-cont">
                <Popover.Button className="pop-btn">PEEK</Popover.Button>
                <Popover.Panel className="pop-panel">
                    <p>History</p>
                    <div className="mp3-hist">
                        <p className="hist-label">Listening to:</p>
                        <audio controls>
                            <source src="https://forestw70.github.io/sketches-bcc-client/assets/music/amanda-alarm.mp3" type="audio/mpeg"></source>
                        </audio>
                    </div>
                        <p className="hist-label">pic history:</p>
                    <div className="pic-hist">
                        
                            <img src="../../assets/icons/auth_lukasz-mauro.jpg" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra1.png" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra2.png" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra3.png" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra4.png" className="pic-prvw"></img>
                            <img src="../../assets/icons/xxtra7.png" className="pic-prvw"></img>
                        

                    </div>
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