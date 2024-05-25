import { justSomeThoughts } from "../data/notes-data";

export const NotesRollout = () => {
    const allNotes = justSomeThoughts.map((nObj, idx) => (
        <article key={`my-note-${idx}`} className="note-item">
            <h3>{nObj.title}</h3>
            <div>{nObj.body}</div>
        </article>
    ))
    return allNotes;
}

export const JsxNotesTest = () => {
    return (
        <div>
            {justSomeThoughts.map(list => {
                <article key={list.title} className="note-item">
                    <h3>{list.title}</h3>
                    <p>{list.body}</p>
                    <div>
                        <li>
                        {list.items.map((notes, idx) => {
                            <p>{notes.ttl}</p>
                        })}
                        </li>
                    </div>
                </article>
            })}
        </div>
    )
}