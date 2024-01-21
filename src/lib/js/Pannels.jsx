import { imgDataObj } from "../data/img-meta"

const data = imgDataObj[0].imageList;

export const CreatePannels = (props) => {
    // console.log(data)
    const listItems = data.map(item => (
        <article className="panel-box" key={item.url}>
            <p>{item.url}</p>
        </article>
    ));

    return (
        <section>
            {listItems}
        </section>
    )


}