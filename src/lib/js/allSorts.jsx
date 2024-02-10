import { sketches } from "../data/mp3-data";

let iIunes = [];
let classTypes = ["row", "panel", "artcl"]
const loadDefault = () => {
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

}

const linkBP = () => {
    const itemBits = iTunes.map((line, idx) => (
        

        
    ))
    return (
        <article>
            
        </article>
    )
}