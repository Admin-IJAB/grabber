import { useState } from 'react'
import { imgDataObj } from "../data/img-meta"

const testData = imgDataObj[3];
const allChapters = imgDataObj;

// const urlStart = `../../../local-works/imgs/${data.folder}/${item.url}/`

const previewImg = (datFile) => {
    const fileUrl = `../../../assets/imgs/${testData.folder}/${datFile}`;
    // console.log(fileUrl);
    return (
        <img className="img-prvw" src={fileUrl}></img>
    );
}


const loadChapters = (fileName, chapter) => {
    const fileUrl = `../../../assets/imgs/${chapter}/${fileName}`;
    // console.log(fileUrl);
    return (
       <img className="img-prvw" src={fileUrl}></img>
    );
}
const targetChapter = (chapName) => {

}

export const LoadAllChapters = (props) => {
    // console.log(data)
    const listItems = allChapters.map(item => (
        <article className="panel-card" key={item.url}>
            {loadChapters(item.url, item.folder)}
            <p className="panel-title">{item.title}</p>
            <p>{item.date}</p>
        </article>
    ));

    return (
        <section className="panel-box" id="pBox">
            {listItems}
            {console.log(allChapters)}
        </section>
    )


}


const panelHero = (imgUrl, chapterId) => {
    const checkObj = (id) => url == imgUrl;
    const datImgObj = imgDataObj[chapterId].imageList.find(checkObj)

    return (
        <div className="pop-box" id="">
            {console.log(datImgObj)}
        </div>
    )
}


export const CreatePannels = (props) => {
    // console.log(data)
    const loadedChap = 3;
    const listItems = testData.imageList.map(item => (
        <article className="panel-card" key={item.url} onClick={() => panelHero(item.url, loadedChap)}>
            {previewImg(item.url)}
            <p className="panel-title">{item.title}</p>
            <p>{item.url}</p>
        </article>
    ));

    return (
        <section className="panel-box">
            {listItems}
        </section>
    )


}