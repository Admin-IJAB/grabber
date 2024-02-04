import { Link } from "react-router-dom";
import { JustPickOne } from "./NavOptions";

const navLogoSrc = "../../public/icons/bblogo1.png"

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