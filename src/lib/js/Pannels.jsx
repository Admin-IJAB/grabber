import { useState } from 'react'
import { imgDataObj } from "../data/img-meta"

const testData = imgDataObj[1];
const allChapters = imgDataObj;

// const urlStart = `../../../local-works/imgs/${data.folder}/${item.url}/`

const previewImg = (datFile) => {
    const fileUrl = `../../../public/assets/imgs/${testData.folder}/${datFile}`;
    console.log(fileUrl);
    return (
        <img className="img-prvw" src={fileUrl}></img>
    );
}

const panelHero = () => {


    return (
        <div className="pop-box" id="">

        </div>
    )
}

const loadChapters = (fileName, chapter) => {
    const fileUrl = `../../../public/assets/imgs/${chapter}/${fileName}`;
    console.log(fileUrl);
    return (
        <img className="img-prvw" src={fileUrl}></img>
    );
}
const targetChapter = (chapName) => {

}

export const LoadAllChapters = (props) => {
    // console.log(data)
    const listItems = allChapters.map(item => (
        <article className="panel-card" key={item.cover} onClick={() => console.log(item.cover)}>
            {loadChapters(item.cover, item.folder)}
            <p className="panel-title">{item.chapter}</p>
            <p>{item.date}</p>
        </article>
    ));

    return (
        <section className="panel-box" id="pBox">
            {listItems}
        </section>
    )


}




export const CreatePannels = (props) => {
    // console.log(data)
    const listItems = testData.imageList.map(item => (
        <article className="panel-card" key={item.url} onClick={() => console.log(item.url)}>
            {previewImg(item.url)}
            <p className="panel-title">{item.title}</p>
            <p>{item.url}</p>
        </article>
    ));

    // return (
    //     <section className="panel-box">
    //         {listItems}
    //     </section>
    // )


}