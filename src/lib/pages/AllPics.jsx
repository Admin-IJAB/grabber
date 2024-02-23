import { useParams } from "react-router-dom"
import { SwapDecks } from "../js/SwapDecks";
import "../styles/pics.css"


export const AllPics = () => {
    let paramId = useParams().chapter;
    // paramId == undefined ? paramId = "def" : paramId = useParams().chapter;

    

    return (
        <div>
            <h2>pics page</h2>
            <p>You are looking at the {paramId} page</p>
            
            <div className="panel-box">
                <SwapDecks />
            </div>
        </div>
    )
}