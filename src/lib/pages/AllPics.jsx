import { useParams } from "react-router-dom"

export const AllPics = () => {
    const paramId = useParams().chapter;
    return (
        <div>
            <h2>pics page</h2>
            <p>You are looking at the {paramId} page</p>
        </div>
    )
}