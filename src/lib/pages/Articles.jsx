import { newsArts } from "../data/article-data"
import "../styles/articles.css"

const articlePanels = newsArts.map((artcl, idx) => (
    <article key={idx} className="artcl-panel">
        <p>*{artcl.title}*</p>
        <p>BY: {artcl.author}</p>
        <p>{artcl.source}</p>
        <p>{artcl.date}</p>
        <p>{artcl.body}</p>
    </article>
))
export const Articles = () => {
    return (
        <>
            <h2>articles page</h2>
            <div className="news-box">
                {articlePanels}
            </div>
        </>
    )
}