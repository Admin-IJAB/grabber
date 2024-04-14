import { newsArts } from "../data/article-meta"
import "../styles/articles.css"

const articlePanels = newsArts.map((artcl, idx) => (
    <article key={idx} className="artcl-panel">
        <p className="artcl-ttl">&ldquo;{artcl.title}&rdquo;</p>
        <p className="artcl-wri">{artcl.author}</p>
        <p className="artcl-pub">{artcl.source}</p>

        <span className="artcl-dte">{artcl.date}</span>
        <p className="artcl-bdy">{artcl.body}</p>
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