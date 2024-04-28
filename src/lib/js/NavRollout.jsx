import { Link } from "react-router-dom";
import { JustPickOne } from "./NavOptions";
import { ShowHistPlayer, MediaPlayer } from "./ShowHistPlayer";
import "../styles/navMenu.css"

const navLogoSrc = "../../assets/icons/icon_bbb-red.png"

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
            <MediaPlayer />
            <div>
                {/* <div className="audio-cont">
                    
                    <audio controls>
                        <source 
                            src="https://forestw70.github.io/sketches-bcc-client/assets/music/amanda-alarm.mp3" 
                            type="audio/mpeg"
                            id="nowPlaying">
                        </source>
                    </audio>
                </div> */}
            </div>
        </div>
    )
}