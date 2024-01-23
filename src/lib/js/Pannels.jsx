import { imgDataObj } from "../data/img-meta"

const data = imgDataObj[0].imageList;

export const CreatePannels = (props) => {
    // console.log(data)
    const listItems = data.map(item => (
        <article className="panel-card" key={item.url}>
            <img className="img-prvw" src={`../../../public/local-works/imgs/FW-Valle-1-2022/${item.url}`}></img>
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