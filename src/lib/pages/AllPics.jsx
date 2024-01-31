import { useParams, Link } from "react-router-dom"
import { imgDataObj } from "../data/img-meta";

const allInfos = imgDataObj;

const loadDefault = () => {
    let items = allInfos.map((chptr, idx) => (
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

const swapChapter = (cName) => {
    const myNewChaps = allInfos.find((ch) => ch.refId == cName)
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

const getChapter = (ref) => {
    return allInfos.find((ch) => ch.refId == ref).folder;
}

export const AllPics = () => {
    let paramId = useParams().chapter;
    // paramId == undefined ? paramId = "def" : paramId = useParams().chapter;
    let loadedChapter = loadDefault();

    const loadPrvw = (fileName, chapter) => {
        let fileUrl = `../../../assets/imgs/${chapter}/${fileName}`;
        if (paramId !== undefined) {
            fileUrl = `../../../assets/imgs/${getChapter(paramId)}/${fileName}`;
        }

        return (
           <img className="img-prvw" src={fileUrl}></img>
        );
    }

    const chapterToLoad = () => {
        if (paramId == undefined) {
            console.log("default")
        } else {
            console.log(paramId)
            loadedChapter = swapChapter(paramId)
        }
        const currentPannels = loadedChapter.map((item, idx) => (
            <Link key={"pic" + idx} to={`/pics/${item.refId}`}>
                <article className="panel-card">
                
                {loadPrvw(item.url, item.folder)}
                <p className="panel-title">{item.title}</p>
                <p>{item.url}</p>
            </article>
            </Link>
        ))
        return currentPannels;
    }

    return (
        <div>
            <h2>pics page</h2>
            <p>You are looking at the {paramId} page</p>
            
            <div className="panel-box">
                {chapterToLoad()}
            </div>
        </div>
    )
}