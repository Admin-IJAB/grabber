import { Link, useParams } from "react-router-dom"

import { SwapDecks } from "../js/SwapDecks";
import { sketches } from "../data/mp3-meta";
import { imgDataObj } from "../data/img-meta";

import { HistContext } from "../js/HistContext";

import "../styles/disp-cards.css"

const bigData = sketches.concat(imgDataObj);

const panelRollOut = () => {
    return (
        <section className="panel-sec">
            {bigData.map(chapter => {
                return (
                    <Link key={chapter.title} to={`./${chapter.media}/${chapter.srcUrl}`}>
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

export const AllPanels = ({setHistory}) => {
    // let paramId = useParams().chapter;
    // paramId == undefined ? paramId = "def" : paramId = useParams().chapter;
    // const { history, setHistory } = HistContext();
    // console.log(history)
    

    return (
        <div>
            
            <div className="panel-box">
                
                {panelRollOut()}
            </div>
        </div>
    )
}