import { sketches } from "../data/mp3-data"

const testImport = sketches[6];
const picHold = "../../../assets/imgs/FW-valle-is-home/Valle-12.JPG";

const testRollout = testImport.trackList.map((track, idx) => (
    {
        alTitle: testImport.title,
        alArtist: testImport.artist,
        alArtUrl: testImport.artLink,
        trTitle: track.track,
        trLength: track.length,
        trFile: track.fileName,
        refId: idx,
        trDate: track.date,
        trTime: track.started,
    }
))

const testRows = testRollout.map((song, idx) => (
    <article id={song.trTime} className="song-row" key={song.alTitle + idx}>
        <span>{idx}</span>
        <span>{song.alTitle}</span>
        <span>{song.alArtist}</span>
        <span>{song.trTitle}</span>
        <span>{song.trLength}</span>
        <span>{song.alArtUrl}</span>
        <span>{song.trFile}</span>
        <span>{song.trDate}</span>
        <span>{song.trTime}</span>
    </article>
))

const testPanels = testRollout.map((song, idx) => (
    <article id={song.trTime} className="panel-card tst-panel" key={song.alTitle + idx}>
        <img src={picHold} className="img-prvw"></img>
        <span>{idx + 1} - {song.trTitle} - {song.trLength}</span>
        <span>Artist: {song.alArtist}</span>
        <span>Album: {song.alTitle}</span>
        {/* <span>{song.trTitle}</span> */}
        {/* <span>{song.trLength}</span> */}
        <span>{song.alArtUrl}</span>
        <span>{song.trFile}</span>
        <span>{song.trDate}</span>
        <span>{song.trTime}</span>
    </article>
))

const testArticles = testRollout.map((song, idx) => (
    <article id={song.trTime} className="article-card" key={song.alTitle + idx}>
            <img src={picHold} className="img-prvw"></img>
        <div className="article-info">
            <p>TITLE: {song.alTitle}</p>
            <p>BY: {song.alArtist}</p>
            <p>ABSTRACT↯</p>
        </div>
        <p className="article-para">
            ~ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Sit amet risus nullam eget felis. Erat imperdiet sed euismod nisi. Sagittis orci a scelerisque purus semper. Vel eros donec ac odio tempor orci dapibus. Sed viverra tellus in hac habitasse platea dictumst. Eget egestas purus viverra accumsan. Sit amet venenatis urna cursus eget nunc.
        </p>
    </article>
))


export const IndexPage = () => {
    return (
        <>
            <p>Welcome to the .space index</p>
            <div>
                <p>Heres what you missed!</p>
                <div>
                    <p>Panel View</p>
                    <div className="panel-box">
                        {testPanels}
                    </div>
                </div>
                <div>
                    <p>Row view</p>
                    <div>
                        {testRows}
                    </div>
                </div>
                <div>
                    <p>Article view</p>
                    <div className="panel-box">
                        {testArticles}
                    </div>
                </div>
            </div>
        </>
    )
}