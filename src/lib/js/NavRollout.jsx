import { Link } from "react-router-dom";

export const NavRollout = () => {
    const navOps = ["index", "home", "pics", "mp3s", "notes", "about", "settings"];

    const justPickOne = navOps.map((op, idx) => (
        <li key={idx}>
            <Link to={`/${op}`}>
            {op}
            </Link>
        </li>
    ))
    return (
        <ul className='nav-btns'>
            {justPickOne}
        </ul>
    )
}