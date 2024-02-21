import { Link } from "react-router-dom";

export const JustPickOne = () => {
    const navOps = ["index", "home", "pics", "mp3s", "notes", "about", "settings", "show player"];
    const justPickOne = navOps.map((op, idx) => (
    <li key={idx}>
        <Link to={`/${op}`} className="nav-links">
            {op}
        </Link>
    </li>
))
    return (justPickOne);
}