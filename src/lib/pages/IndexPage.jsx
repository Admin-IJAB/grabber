import { sketches } from "../data/mp3-data";
import { imgDataObj } from "../data/img-meta";

const picHold = "../../../assets/imgs/FW-valle-is-home/Valle-12.JPG";
const testImport = sketches.concat(imgDataObj);

const standardize = () => {
    testImport.map(chapter => {
        chapter.map((item, idx) => {
            return(
                // {
                //     chap: chapter.title,
                //     auth: chapter.author,
                //     pstd: chapter.postDt,
                //     aUrl: chapter.artUrl,
                //     sUrl: chapter.srcUrl,
                //     itTtl: item.name,
                //     link: item.url,

                // }
                console.log(item)
            )
        })
    })
}

const hideShowPnlLst = (chapKey) => {
console.log(chapKey)

}

export const AllPanels = () => {
    return (
        <section className="panel-sec">
            {testImport.map(chapter => {
                return (
                    <div className="item-frame" key={chapter.title} onClick={() => {hideShowPnlLst(true)}}>
                        <span>{chapter.postDt}</span>
                        <span>{chapter.srcUrl}</span>
                        <img src={ chapter.media === "photo" ? 
                            `../../../assets/imgs/${chapter.folder}/${chapter.artUrl}`
                            :
                            `https://raw.githubusercontent.com/ForestW70/sketches-bcc-client/main/assets/images/${chapter.artUrl}`
                        }></img>
                        <h2 className="pnl-ttl">{chapter.title}</h2>
                        <h3 className="pnl-auth">{chapter.authSh}</h3>
                        <div className="item-list">
                        {chapter.itemList.map((item, idx) => {
                            return (
                                <div className="pnl-row" key={idx}>
                                    <span>{item.name}</span>
                                    <span>{item.url}</span>
                                    <span>{item.length == null ? "--" : item.length}</span>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export const AllRows = () => {
    return (
        <section>
            {testImport.map((chapter, idx) => {
                return (
                <div className="row-box">
                        {chapter.itemList.map((item, idx) => {
                            return (
                                <article className="song-row" key={chapter.title}>
                                    <span>{idx+1}</span>
                                    <span>{chapter.title}</span>
                                    <span>{chapter.postDt}</span>
                                    <span>{chapter.srcUrl}</span>
                                    <span>{chapter.authSh}</span>
                                    <span>{item.name}</span>
                                    <span>{item.url}</span>
                                    <span>{item.length == null ? "--" : item.length}</span>
                                </article>
                            )
                        })}
                 </div>
                )   
            })}
        </section>
    )
}


const tempStructure = [
    {
        title: "post title",
        author: "artist or posters name",
        authSh: "short name",
        postDt: "date released",
        artUrl: "../link.img",
        srcUrl: "../api reference",
        itemList: [
            {
                name: "individual item name",
                url: "../api pull",
                // music
                length: "song length",
                ogFile: "original file name",
                daw: "daw used",
                startDt: "start date",
                startTm: "start time",
            },
        ]
    },
]


// const testRows = testRollout.itemList.map((idvItem, idx) => (
//     <article id={idvItem.name} className="song-row" key={idvItem.alTitle + idx}>
//         <span>{idx}</span>
//         <span>{idvItem.alTitle}</span>
//         <span>{idvItem.alArtist}</span>
//         <span>{idvItem.trTitle}</span>
//         <span>{idvItem.trLength}</span>
//         <span>{idvItem.alArtUrl}</span>
//         <span>{idvItem.trFile}</span>
//         <span>{idvItem.trDate}</span>
//         <span>{idvItem.trTime}</span>
//     </article>
// ))

// const testRollout = testImport.itemListList.map((track, idx) => (
//     {
//         alTitle: testImport.title,
//         alArtist: testImport.artist,
//         alArtUrl: testImport.artLink,
//         trTitle: track.track,
//         trLength: track.length,
//         trFile: track.fileName,
//         refId: idx,
//         trDate: track.date,
//         trTime: track.started,
//     }
// ))



// const testPanels = testRollout.map((song, idx) => (
//     <article id={song.trTime} className="panel-card tst-panel" key={song.alTitle + idx}>
//         <img src={picHold} className="img-prvw"></img>
//         <span>{idx + 1} - {song.trTitle} - {song.trLength}</span>
//         <span>Artist: {song.alArtist}</span>
//         <span>Album: {song.alTitle}</span>
//         {/* <span>{song.trTitle}</span> */}
//         {/* <span>{song.trLength}</span> */}
//         <span>{song.alArtUrl}</span>
//         <span>{song.trFile}</span>
//         <span>{song.trDate}</span>
//         <span>{song.trTime}</span>
//     </article>
// ))

// const testArticles = testRollout.map((song, idx) => (
//     <article id={song.trTime} className="article-card" key={song.alTitle + idx}>
//             <img src={picHold} className="img-prvw"></img>
//         <div className="article-info">
//             <p>TITLE: {song.alTitle}</p>
//             <p>BY: {song.alArtist}</p>
//             <p>ABSTRACT↯</p>
//         </div>
//         <p className="article-para">
//             ~ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Sit amet risus nullam eget felis. Erat imperdiet sed euismod nisi. Sagittis orci a scelerisque purus semper. Vel eros donec ac odio tempor orci dapibus. Sed viverra tellus in hac habitasse platea dictumst. Eget egestas purus viverra accumsan. Sit amet venenatis urna cursus eget nunc.
//         </p>
//     </article>
// ))


export const IndexPage = () => {
    return (
        <>
            <p>Welcome to the .space index</p>
            <div>
                <p>Heres what you missed!</p>
                <div>
                    <p>Panel View</p>
                    <div>
                        {AllPanels()}
                    </div>
                </div>
                <div>
                    <p>Row View</p>
                    
                        {AllRows()}
                    
                </div>
                {/* <div>
                    <p>Article view</p>
                    <div className="panel-box">
                        {testArticles}
                    </div>
                </div> */}
            </div>
        </>
    )
}