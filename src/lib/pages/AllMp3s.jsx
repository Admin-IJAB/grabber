import { Link, useParams } from "react-router-dom"
import { sketches } from "../data/mp3-data"

const songView = () => {
    let iTunes = [
        {
        alTitle: "Album",
        alArtist: "Artist",
        alArtUrl: "URL",
        trTitle: "Title",
        trLength: "Length",
        trFile: "File",
        refId: "#",
        trDate: "Date",
        trTime: "StTme",
        },
    ];


    sketches.map((album, i) => {
        album.trackList.map((track, ii) => ((
            iTunes.push({
                alTitle: album.title,
                alArtist: album.artist,
                alArtUrl: album.artLink,
                trTitle: track.track,
                trLength: track.length,
                trFile: track.fileName,
                refId: ii,
                trDate: track.date,
                trTime: track.started,
            })
        )))
    })

    const songRows = iTunes.map((song, idx) => (
            <article id={song.trTime} className="song-row" key={song.alTitle + idx}>
                <span>{idx > 0 ? idx : "#"}</span>
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

    return (
        <>
            <p>Looking at Song View</p>
            {songRows}
        </>
    )
}
const loadDefault = () => {
    // {
    //     TrTitle: track.track,
    //     length: track.length,
    //     mp3Url: track.url,
    //     ogFile: track.fileName,
    //     daw: track.daw,
    //     startD: track.date,
    //     startT: track.started
    // }

    // let mySongs = sketches.map((album, idx) => (
    //     album.trackList.map((track, iidx)) => (

    //         {
    //             title: album.title,
    //             artist: album.longArtist,
    //             folderUrl: album.artLink,
    //             refId: album.trackList[0].track,
    //             chNum: idx
    //         }
    //     )
    // ))

    // const iTunes = mySongs.map((song, idx) => (
    //     <article className="song-row" key={song.title}>
    //         <span>{song.chNum}</span>
    //         <span>{song.title}</span>
    //         <span>{song.artist}</span>
    //         <span>{song.folderUrl}</span>
    //         <span>Listen now~</span>
    //     </article>
    // ))

    // return iTunes;
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
            {songView()}
        </>
    )
}