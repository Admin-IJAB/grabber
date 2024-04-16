import { Link, useParams } from "react-router-dom"
import { React, useState } from "react";
import { sketches } from "../data/mp3-meta"
import { imgDataObj } from "../data/img-meta";

import "../styles/disp-rows.css";

const bigData = sketches.concat(imgDataObj);

const realIdx = (act) => {
    if (act === 1) {
        setRowIdx = rowIdx + 1
    }
    return position;
}



const rowRollOut = () => {
    let [currHist, setCurrHist] = useState([]);
    let [rowIdx, setRowIdx] = useState(0);

    const updateHistory = (a,b,c,d,e) => {
        const histItem = {
            author: a,
            title: d,
            srcFolder: b,
            srcUrl: c,
            media: e
        }
        
        setCurrHist(prev => [...prev, histItem]);
        console.log(currHist);
    }

    return (
        <>
            {bigData.map((chapter, idx) => {
                return (
                    <>
                        {chapter.itemList.map((item, iidx) => {
                            return (
                                <article className="song-row" key={idx + "-" + iidx} onClick={() => updateHistory(chapter.authSh, chapter.srcUrl, item.url, item.name, chapter.media)}>
                                    
                                    <span>{rowIdx}</span>
                                    <span>{chapter.author}</span>
                                    <span>{item.name}</span>
                                    <span>{chapter.title}</span>
                                    <span>{chapter.srcUrl + "/" + item.url}</span>
                                    <span>{item.length == null ? "--" : item.length}</span>
                                    <span>{chapter.media}</span>
                                </article>
                            )
                        })}
                    </>
                )
            })}
        </>
    )
}

export const AllRows = () => {
    return (
        <>
            <p>Row View</p>
            <section className="row-box">
                <article className="song-row" id="rowHeader" key="header-row">
                    <span>#</span>
                    <span>author</span>
                    <span>title</span>
                    <span>chapter</span>
                    <span>url</span>
                    <span>length</span>
                    <span>media</span>
                </article>
                {rowRollOut()}
            </section>
        </>
    )
}