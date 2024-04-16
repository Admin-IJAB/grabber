import { Link, useParams } from "react-router-dom"

import { SwapDecks } from "../js/SwapDecks";
import { sketches } from "../data/mp3-meta";
import { imgDataObj } from "../data/img-meta";

import "../styles/disp-cards.css"

const bigData = sketches.concat(imgDataObj);

const panelRollOut = () => {
    return (
        <section className="panel-sec">
            {bigData.map(chapter => {
                return (
                    <Link key={chapter.title} to={`./${chapter.media}/${chapter.title}`}>
                    <div className="item-frame">
                        <span>{chapter.postDt}</span>
                        <span>{chapter.srcUrl}</span>
                        <img src={`../../../assets/icons/${chapter.artUrl}`}></img>
                        <h2 className="pnl-ttl">{chapter.title}</h2>
                        <h3 className="pnl-auth">{chapter.author}</h3>
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
                    </Link>
                )
            })}
        </section>
    )
}

export const AllPanels = () => {
    let paramId = useParams().chapter;
    // paramId == undefined ? paramId = "def" : paramId = useParams().chapter;

    

    return (
        <div>
            <h2>pics page</h2>
            <p>You are looking at the {paramId} page</p>
            
            <div className="panel-box">
                <p>Panel View</p>
                {/* <SwapDecks /> */}
                {panelRollOut()}
            </div>
        </div>
    )
}