import { AllRows } from "./AllRows";
import { AllPanels } from "./AllPanels";
import { ItemFocus } from "./ItemFocus";

import { sketches } from "../data/mp3-meta";
import { imgDataObj } from "../data/img-meta";

// const picHold = "../../../assets/imgs/FW-valle-is-home/Valle-12.JPG";
const testImport = sketches.concat(imgDataObj);



export const IndexPage = () => {
    return (
        <>
            <h2>Welcome to the .space index</h2>
            <div>

                <div>
                    <p>Item Focus</p>
                    <ItemFocus />
                </div>
                <div>
                    <p>Panel View</p>
                    <div>
                        <AllPanels />
                    </div>
                </div>

                <div>
                    <AllRows />
                </div>
            </div>
        </>
    )
}