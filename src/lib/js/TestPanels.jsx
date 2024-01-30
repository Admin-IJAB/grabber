import { useState, useEffect } from "react";
import { imgDataObj } from "../data/img-meta";
import { useParams } from "react-router-dom";

const allInfos = imgDataObj;


// const updateChapter = (newChapter, count) => {
//     let thisChapter = [];
//     if (localStorage.getItem("chapLocation") === "init") {
//         thisChapter = JSON.parse(localStorage.getItem("chapInView"))
//     }
// }
const loadDefault = () => {
    let items = allInfos.map((chptr, idx) => (
        {
            title: chptr.title,
            folder: chptr.folder,
            url: chptr.url,
            chNum: idx
        }
    ))

    return items;
}
// const folderTest = "FW-valle-is-home";

export const TestPanels = (props) => {
    const [chapObj, setChapObj] = useState(loadDefault());
    const [currChap, setCurrChap] = useState("init");

    

    const loadChapters = (fileName, chapter) => {
        let fileUrl = `../../../assets/imgs/${chapter}/${fileName}`;
        if (currChap !== "init") {
            setCurrChap(chapter);
            fileUrl = `../../../assets/imgs/${currChap}/${fileName}`;
        }

        return (
           <img className="img-prvw" src={fileUrl}></img>
        );
    }

    const changePage = (dataId) => {
        console.log("moving to chapter:", dataId);
        setCurrChap(dataId);
    }

    const currentPannels = chapObj.map(item => (
        <article className="panel-card" key={item.title} onClick={() => changePage(item.folder)}>
            
            {loadChapters(item.url, item.folder)}
            <p className="panel-title">{item.title}</p>
            <p>{item.url}</p>
        </article>

    ))

    return (
        <section className="panel-box" id="pBox">
            {currentPannels}
            {/* {console.log(chapObj)} */}
        </section>
    )
    
}