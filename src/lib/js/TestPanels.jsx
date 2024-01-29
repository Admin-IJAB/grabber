import { useState, useEffect } from "react";
import { imgDataObj } from "../data/img-meta";

const allInfos = imgDataObj;


const updateChapter = (newChapter, count) => {
    let thisChapter = [];
    if (localStorage.getItem("chapLocation") === "init") {
        thisChapter = JSON.parse(localStorage.getItem("chapInView"))
    }
}

export const TestPanels = (props) => {
    const [chapObj, setChapObj] = useState(allInfos);
    const [currChap, setCurrChap] = useState(["init"]);

    useEffect(() => {
        console.log(currChap);
    }, []);

    const loadChapters = (fileName, chapter) => {
        let fileUrl = `../../../assets/imgs/${chapter}/${fileName}`;
        if (currChap !== "init") {
            setCurrChap(chapter);
            let fileUrl = `../../../assets/imgs/${currChap}/${fileName}`;
        }

        return (
           <img className="img-prvw" src={fileUrl}></img>
        );
    }

    const setData = (dataId) => {
        setCurrChap(dataId);
    }

    const currentPannels = chapObj.map(item => (
        <article className="panel-card" key={item.url} onClick={() => setData(item.folder)}>
            
            {loadChapters(item.url, item.folder)}
            <p className="panel-title">{item.title}</p>
            <p>{item.url}</p>
        </article>

    ))

    return (
        <section className="panel-box" id="pBox">
            {currentPannels}
            {/* {console.log(allChapters)} */}
        </section>
    )
    
}