import { Link, useParams } from "react-router-dom";
import { imgDataObj } from "../data/img-meta";
import { HeroFocus } from "./HeroFocus";



const loadDefault = () => {
    let items = imgDataObj.map((chptr, idx) => (
        {
            title: chptr.title,
            folder: chptr.folder,
            url: chptr.url,
            refId: chptr.refId,
            chNum: idx
        }
    ))
    return items;
}
const getChapter = (ref) => {
    return imgDataObj.find((ch) => ch.refId == ref).folder;
}

const loadPrvw = (fileName, chapter, pId) => {
        let fileUrl = `../../../assets/imgs/${chapter}/${fileName}`;
        if (pId !== undefined) {
            fileUrl = `../../../assets/imgs/${getChapter(pId)}/${fileName}`;
        }

        return (
           <img className="img-prvw" src={fileUrl}></img>
        );
    }

const swapChapter = (cName) => {
        const myNewChaps = imgDataObj.find((ch) => ch.refId == cName)
        console.log(myNewChaps.imageList)
        let items = myNewChaps.imageList.map((chptr, idx) => (
            {
                title: chptr.title,
                folder: chptr.folder,
                url: chptr.url,
                refId: chptr.refId,
                chNum: idx
            }
        ))
        return items;
}

export const SwapDecks = () => {
    let paramId = useParams().chapter;
    let loadedChapter = loadDefault();

        if (paramId == undefined) {
            console.log("default")
        } else {
            console.log(paramId)
            loadedChapter = swapChapter(paramId)
        }
        const currentPannels = loadedChapter.map((item, idx) => (
            <Link key={"pic" + idx} to={`/pics/${item.refId}`}>
            <article className="panel-card">
                
                {loadPrvw(item.url, item.folder, paramId)}
                <p className="panel-title">{item.title}</p>
                <p>{item.url}</p>
                <HeroFocus 
                title={item.title}
                path={item.url}
                folder={item.folder}
                refId={paramId}
                />
            </article>
            </Link>
        ))
        return currentPannels;
}