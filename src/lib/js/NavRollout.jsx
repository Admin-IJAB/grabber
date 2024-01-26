export const NavRollout = () => {
    const navOps = ["index", "home", "pics", "mp3s", "notes", "about", "settings"];

    const justPickOne = navOps.map((op, idx) => (
        <li key={idx}><button key={op} className={op} onClick={() => console.log(`${op}-nBtn`)}>
            {op}
        </button></li>
    ))
    return (
        <ul className='nav-btns'>
            {justPickOne}
        </ul>
    )
}