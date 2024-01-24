import { imgDataObj } from "../data/img-meta"

const data = imgDataObj[0];

// const urlStart = `../../../local-works/imgs/${data.folder}/${item.url}/`

const locateUrl = (datFile) => {
    const urlStart = `../assets/imgs/${data.folder}/${datFile}/`;
    console.log(urlStart)
    return urlStart;
}


export const CreatePannels = (props) => {
    // console.log(data)
    const listItems = data.imageList.map(item => (
        <article className="panel-card" key={item.url} onClick={() => console.log(item.url)}>
            <img className="img-prvw" src={locateUrl(item.url)}></img>
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