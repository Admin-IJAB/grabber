import { Link } from "react-router-dom";
import { JustPickOne } from "./NavOptions";
import "../styles/navMenu.css"

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
            
        </div>
    )
}