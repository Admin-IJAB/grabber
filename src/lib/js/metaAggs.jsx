import { Link, useParams } from "react-router-dom";
import { imgDataObj } from "../data/img-meta";



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

export const RowConstruct = (messObj) => {
    let newObj = [];
    messObj.map((chapter, idx) => {
        chapter.itemList.map((item, iidx) => {
            newObj.push({
                rowKey: chapter.media + `${idx}-${iidx}`,
                rAuth: chapter.author,
                rAuSh: chapter.authSh,
                rName: item.name,
                rTitle: chapter.title,
                rSrc: chapter.srcUrl + "/" + item.url,
                rArt: chapter.artUrl,
                rLength: item.length == null ? "--" : item.length,
                rMedia: chapter.media,
                rFolder: chapter.folder
            })
        })
    })
    // console.log(newObj)
    return newObj;
}
