import { Link } from "react-router-dom";

import { sketches } from "../data/mp3-meta";
import { imgDataObj } from "../data/img-meta";
import { useParams } from "react-router-dom";

import { useHistory } from "../js/HistContext";

import '../styles/disp-focus.css';

export const ItemFocus = () => {
    return (
        <div className="focus-cont">
            <img src="../../../assets/icons/auth_lukasz-mauro.jpg"></img>
            <div className="focus-meta">
                <p>Media Type</p>
                <p>Album Title</p>
                <p>Album Artist</p>
                <p>Release date</p>
                <p>Album Title</p>
                <p>Album Title</p>
            </div>
            <div className="focus-items">
                <div className="foc-row">
                    <span>1</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
                <div className="foc-row">
                    <span>2</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
                <div className="foc-row">
                    <span>3</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
                <div className="foc-row">
                    <span>4</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
                <div className="foc-row">
                    <span>5</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
                <div className="foc-row">
                    <span>1</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
                <div className="foc-row">
                    <span>2</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
                <div className="foc-row">
                    <span>3</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
                <div className="foc-row">
                    <span>4</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
                <div className="foc-row">
                    <span>5</span>
                    <span>song title</span>
                    <span>9:00</span>
                </div>
            </div>
        </div>
    )
}

export const SingleFocusPhoto = () => {
    const albumParam = useParams().albID;
    const thisChap = imgDataObj.find(alb => alb.srcUrl == albumParam)
    return (
        <div className="focus-cont">
            <img src={`../../../assets/icons/${thisChap.artUrl}`}></img>
            <div className="focus-meta">
                <p>{thisChap.media}</p>
                <p>{thisChap.author}</p>
                <p>{thisChap.title}</p>
                <p>{thisChap.postDt}</p>
                <p>{thisChap.folder}</p>
            </div>
            <div className="focus-items">
                {thisChap.itemList.map((item, idx) => {
                    return (
                        <div className="foc-row" key={item.name}>
                            <span>{idx}</span>
                            <span>{item.name}</span>
                            <span>{item.url}</span>
                            <span>{thisChap.artUrl}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const loadPrvw = (url, name) => {
    console.log(url + name)
    localStorage.setItem("musHist", JSON.stringify({name: url}))
}

export const SingleFocusMusic = () => {
    const albumParam = useParams().albID;
    const thisChap = sketches.find(alb => alb.srcUrl == albumParam);
    const { history, updateHistory } = useHistory();

    const handleClick = (auth, ttl, src, art, fldr, med) => {
        const addedItem = {
          iName: auth + " - " + ttl,
          fUrl: fldr,
          sUrl: src,
          aUrl: art,
          media: med
        }
        updateHistory(addedItem);
      }

    return (
        <>
            <Link to="../index">
                <div className="back-btn">
                    <p>↚</p>
                    <p>BACK</p>
                </div>
            </Link>
        
        <div className="focus-cont">
            <img src={`../../../assets/icons/${thisChap.artUrl}`}></img>
            <div className="focus-meta">
                <p>{thisChap.media}</p>
                <p>{thisChap.author}</p>
                <p>{thisChap.title}</p>
                <p>{thisChap.postDt}</p>
                <p>{thisChap.folder}</p>
            </div>
            <div className="focus-items">
                {thisChap.itemList.map((item, idx) => {
                    return (
                        <div 
                            key={item.name} 
                            className="foc-row"  
                            onClick={() => handleClick(thisChap.authSh, item.name, item.url, thisChap.artUrl, thisChap.folder, thisChap.media)}>
                            <span>{idx}</span>
                            <span>{item.name}</span>
                            {/* <span>{item.url}</span> */}
                            <span>{item.length}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}