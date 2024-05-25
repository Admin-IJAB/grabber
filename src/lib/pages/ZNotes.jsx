// import { NotesRollout, JsxNotesTest } from "../js/NotesRollout"
import { justSomeThoughts } from "../data/notes-data";

import "../styles/notes.css"

export const Notes = () => {
    // return (
    //     <div className="note-cont">
    //         <NotesRollout />

    //     </div>
    // )
    return (
        <div className="note-cont">
            {justSomeThoughts.map((list, i) => {
                return (
                    <article key={i} className="note-item">
                        <h3>{list.title}</h3>
                        <p>{list.body}</p>
                        <ol className="note-list">
                            {list.items.map((notes, idx) => {
                                return (
                                    <li key={idx}>
                                        {/* <span>{notes.isChecked}</span> */}
                                        <span>{notes.ttl}</span>
                                        <p>{notes.iNote}</p>
                                    </li>
                                )
                            })}
                        </ol>
                    </article>
                )
            })}
        </div>
    )
}