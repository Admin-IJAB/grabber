import { Link, useParams } from "react-router-dom";
import { React, useState, useEffect, useRef } from "react";
import { sketches } from "../data/mp3-meta";
import { imgDataObj } from "../data/img-meta";
import { RowConstruct } from "../js/metaAggs";
import { useHistory } from "../js/HistContext";

import "../styles/disp-rows.css";

const bigData = sketches.concat(imgDataObj);


export const AllRows = () => {
  const [rowsLoaded, setRowsLoaded] = useState(RowConstruct(bigData));
  const { history, updateHistory } = useHistory();

  const handleClick = (iObj) => {
    const addedItem = {
      iName: iObj.rAuSh + " - " + iObj.rName,
      fUrl: iObj.rFolder,
      sUrl: iObj.rSrc.split("/")[1],
      aUrl: iObj.rArt,
      media: iObj.rMedia
    }
    updateHistory(addedItem);
  }

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
              onClick={() => handleClick(iObj)}
            >

              <span>{index + 1}</span>
              <span>{iObj.rAuth}</span>
              <span>{iObj.rName}</span>
              <span>{iObj.rTitle}</span>
              <span>{iObj.rSrc}</span>
              <span>{iObj.rLength}</span>
              <span>{iObj.rMedia}</span>
            </article>
          )
        })}
      </section>
    </>
  );
};

