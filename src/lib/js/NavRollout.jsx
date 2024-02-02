import { Link } from "react-router-dom";
import reactLogo from '../react.svg'

const navOps = ["index", "home", "pics", "mp3s", "notes", "about", "settings"];
const justPickOne = navOps.map((op, idx) => (
    <li key={idx}>
        <Link to={`/${op}`}>
            {op}
        </Link>
    </li>
))

export const NavRollout = () => {
    
    return (
        <div className='nav-deck'>
            <a href="https://burnthis.space" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <ul className='nav-btns'>
                {justPickOne}
            </ul>
        </div>
    )
}