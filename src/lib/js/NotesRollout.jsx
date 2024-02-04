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