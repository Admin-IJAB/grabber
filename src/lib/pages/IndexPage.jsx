import { AllRows } from "./AllRows";
import { AllPanels } from "./AllPanels";

import { sketches } from "../data/mp3-meta";
import { imgDataObj } from "../data/img-meta";

const picHold = "../../../assets/imgs/FW-valle-is-home/Valle-12.JPG";
const testImport = sketches.concat(imgDataObj);

// 
// panel view
// 
// export const AllPanels = () => {
//     return (
//         <section className="panel-sec">
//             {testImport.map(chapter => {
//                 return (
//                     <div className="item-frame" key={chapter.title}>
//                         <span>{chapter.postDt}</span>
//                         <span>{chapter.srcUrl}</span>
//                         {/* <img src={ chapter.media === "photo" ? 
//                             `../../../assets/imgs/${chapter.folder}/${chapter.artUrl}`
//                             :
//                             `https://raw.githubusercontent.com/ForestW70/sketches-bcc-client/main/assets/images/${chapter.artUrl}`
//                         }></img> */}
//                         <img src={`../../../assets/icons/${chapter.artUrl}`}></img>
//                         <h2 className="pnl-ttl">{chapter.title}</h2>
//                         <h3 className="pnl-auth">{chapter.author}</h3>
//                         <div className="item-list">
//                             {chapter.itemList.map((item, idx) => {
//                                 return (
//                                     <div className="pnl-row" key={idx}>
//                                         <span>{item.name}</span>
//                                         <span>{item.url}</span>
//                                         <span>{item.length == null ? "--" : item.length}</span>
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 )
//             })}
//         </section>
//     )
// }


// 
// row view
// 
// export const AllRows = () => {
//     return (
//         <>
//             {testImport.map((chapter, idx) => {
//                 return (
//                     <>
//                         {chapter.itemList.map((item, iidx) => {
//                             return (
//                                 <article className="song-row" key={item.name + iidx}>
//                                     <span>{iidx + 1}</span>
//                                     <span>{chapter.author}</span>
//                                     <span>{item.name}</span>
//                                     <span>{chapter.title}</span>
//                                     <span>{chapter.srcUrl + "/" + item.url}</span>
//                                     <span>{item.length == null ? "--" : item.length}</span>
//                                     <span>{chapter.media}</span>
//                                 </article>
//                             )
//                         })}
//                     </>
//                 )
//             })}
//         </>
//     )
// }


export const IndexPage = () => {
    return (
        <>
            <p>Welcome to the .space index</p>
            <div>
                <p>All views display tests</p>

                <div>
                    <p>Panel View</p>
                    <div>
                        {AllPanels()}
                    </div>
                </div>

                <div>
                    <AllRows />
                </div>
            </div>
        </>
    )
}