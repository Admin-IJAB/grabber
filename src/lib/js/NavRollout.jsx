import { Link } from "react-router-dom";
import reactLogo from '../react.svg'

import { JustPickOne } from "./NavOptions";

export const NavRollout = () => {
    
    return (
        <div className='nav-deck'>
            <a href="https://burnthis.space" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <ul className='nav-btns'>
                <JustPickOne />
            </ul>
        </div>
    )
}