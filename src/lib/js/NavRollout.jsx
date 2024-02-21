import { Link } from "react-router-dom";
import { JustPickOne } from "./NavOptions";

const navLogoSrc = "../../icons/bblogo1.png"

// const historyBox = 
export const NavRollout = () => {
    
    return (
        <div className='nav-deck'>
            <a href="https://burnthis.space" target="_blank">
                <img src={navLogoSrc} className="logo react" alt="React logo" />
            </a>
            <ul className='nav-btns'>
                <JustPickOne />
            </ul>
            <div className="hist-box">
                <p>History</p>
                <div>
                    <p>last Pic</p>
                    <img src={navLogoSrc} className="hist-pic"></img>
                </div>
                <div>
                    <p>last Song</p>
                    <audio controls>
                        <source src="https://forestw70.github.io/sketches-bcc-client/assets/music/amanda-alarm.mp3" type="audio/mpeg"></source>
                    </audio>
                </div>
                <div>
                    <p>last Article</p>
                </div>
            </div>
        </div>
    )
}