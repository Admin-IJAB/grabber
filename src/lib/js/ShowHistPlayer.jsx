import { Popover } from "@headlessui/react";
import { useState, useEffect } from "react";

export const ShowHistPlayer = () => {

    return (
        <Popover className="pop-cont">
            <Popover.Button className="pop-btn">PEEK</Popover.Button>
            <Popover.Panel className="pop-panel">
                <p>TESTING!!</p>
            </Popover.Panel>
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