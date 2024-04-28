import { Link, useParams } from "react-router-dom";
import { React, useState, useEffect, useRef } from "react";
import { sketches } from "../data/mp3-meta";
import { imgDataObj } from "../data/img-meta";
import { RowConstruct } from "../js/SwapDecks";

import "../styles/disp-rows.css";

const bigData = sketches.concat(imgDataObj);

// const handleHist = (histItem) => {
//     localStorage.getItem("lastViewed") == null
//         ? localStorage.setItem("lastViewed", [])
//         : localStorage.setItem("lastViewed", JSON.stringify(localStorage.getItem("lastViewed").push(histItem)));

//     console.log(localStorage.getItem("lastViewed"));    
// }

export const AllRows = () => {
  const [rowsLoaded, setRowsLoaded] = useState(RowConstruct(bigData));
  
  return (
    <>
      <p>Row View</p>
      <section className="row-box" key="lol">
        <article className="song-row" id="rowHeader" key="header-row">
          <span>#</span>
          <span>author</span>
          <span>title</span>
          <span>chapter</span>
          <span>url</span>
          <span>length</span>
          <span>media</span>
        </article>
        
        {/* {console.log(rowsLoaded)} */}
        {rowsLoaded.map((iObj, index) => {
            return (
                <article 
                    className="song-row" 
                    key={iObj.rowKey}
                    // onClick={handleHist(iObj)}
                >
                
                <span>{index + 1}</span>
                <span>{iObj.rAuth}</span>
                <span>{iObj.rName}</span>
                <span>{iObj.rTitle}</span>
                <span>{iObj.rUrl}</span>
                <span>{iObj.rLength}</span>
                <span>{iObj.rMedia}</span>
              </article>
            )
        })}
      </section>
    </>
  );
};

