import { Link, useParams } from "react-router-dom"
import { sketches } from "../data/mp3-data"

const loadDefault = () => {

    const test = (trackList) => {
        const listy = tracklist.map((track, i) => (
            {
                TrTitle: track.track,
                length: track.length,
                mp3Url: track.url,
                ogFile: track.fileName,
                daw: track.daw,
                startD: track.date,
                startT: track.started
            }
        ))
    }

    let mySongs = sketches.map((album, idx) => (
        {
            title: album.title,
            artist: album.longArtist,
            folderUrl: album.artLink,
            refId: album.trackList[0].track,
            chNum: idx
        }
    ))

    const iTunes = mySongs.map((song, idx) => (
        <article className="song-row" key={song.title}>
            <span>{song.chNum}</span>
            <span>{song.title}</span>
            <span>{song.artist}</span>
            <span>{song.folderUrl}</span>
            <span>Listen now~</span>
        </article>
    ))

    return iTunes;
}

export const AllMp3s = () => {

    // const mySongs = loadDefault();
    // const iTunes = mySongs.map((song, idx) => (
    //     <article className="song-row" key={song.title}>
    //         <span>{song.chNum}</span>
    //         <span>{song.title}</span>
    //         <span>{song.artist}</span>
    //         <span>{song.folderUrl}</span>
    //         <span>Listen now~</span>
    //     </article>
    // ))

    return (
        <>
            <h2>mp3s page</h2>
            {loadDefault()}
        </>
    )
}