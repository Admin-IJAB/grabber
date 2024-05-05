import { Link } from "react-router-dom";

import { sketches } from "../data/mp3-meta";
import { imgDataObj } from "../data/img-meta";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

import { useHistory } from "../js/HistContext";

import "../styles/disp-focus.css";

export const ItemFocus = () => {
  return (
    <div className="focus-cont">
      <img src="../../../assets/icons/auth_lukasz-mauro.jpg"></img>
      <div className="focus-meta">
        <p>Media Type</p>
        <p>Album Title</p>
        <p>Album Artist</p>
        <p>Release date</p>
        <p>Album Title</p>
        <p>Album Title</p>
      </div>
      <div className="focus-rows">
        <div className="foc-row">
          <span>1</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
        <div className="foc-row">
          <span>2</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
        <div className="foc-row">
          <span>3</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
        <div className="foc-row">
          <span>4</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
        <div className="foc-row">
          <span>5</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
        <div className="foc-row">
          <span>1</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
        <div className="foc-row">
          <span>2</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
        <div className="foc-row">
          <span>3</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
        <div className="foc-row">
          <span>4</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
        <div className="foc-row">
          <span>5</span>
          <span>song title</span>
          <span>9:00</span>
        </div>
      </div>
    </div>
  );
};

// export const SingleFocusPhoto = () => {
//   const albumParam = useParams().albID;
//   const thisChap = imgDataObj.find((alb) => alb.srcUrl == albumParam);
//   return (
//     <div className="focus-cont">
//       <img src={`../../../assets/icons/${thisChap.artUrl}`}></img>
//       <div className="focus-meta">
//         <p>{thisChap.media}</p>
//         <p>{thisChap.author}</p>
//         <p>{thisChap.title}</p>
//         <p>{thisChap.postDt}</p>
//         <p>{thisChap.folder}</p>
//       </div>
//       <div className="focus-items">
//         {thisChap.itemList.map((item, idx) => {
//           return (
//             <div className="foc-row" key={item.name}>
//               <span>{idx}</span>
//               <span>{item.name}</span>
//               <span>{item.url}</span>
//               <span>{thisChap.artUrl}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export const SingleFocusMusic = () => {
//   const albumParam = useParams().albID;
//   const thisChap = sketches.find((alb) => alb.srcUrl == albumParam);
//   const { history, updateHistory } = useHistory();

//   const handleClick = (auth, ttl, src, art, fldr, med) => {
//     const addedItem = {
//       iName: auth + " - " + ttl,
//       fUrl: fldr,
//       sUrl: src,
//       aUrl: art,
//       media: med,
//     };
//     updateHistory(addedItem);
//   };

//   return (
//     <>
//       <Link to="../index">
//         <div className="back-btn">
//           <p>↚</p>
//           <p>BACK</p>
//         </div>
//       </Link>

//       <div className="focus-cont">
//         <img src={`../../../assets/icons/${thisChap.artUrl}`}></img>
//         <div className="focus-meta">
//           <p>{thisChap.media}</p>
//           <p>{thisChap.author}</p>
//           <p>{thisChap.title}</p>
//           <p>{thisChap.postDt}</p>
//           <p>{thisChap.folder}</p>
//         </div>
//         <div className="focus-items">
//           {thisChap.itemList.map((item, idx) => {
//             return (
//               <div
//                 key={item.name}
//                 className="foc-row"
//                 onClick={() =>
//                   handleClick(
//                     thisChap.authSh,
//                     item.name,
//                     item.url,
//                     thisChap.artUrl,
//                     thisChap.folder,
//                     thisChap.media
//                   )
//                 }
//               >
//                 <span>{idx}</span>
//                 <span>{item.name}</span>
//                 {/* <span>{item.url}</span> */}
//                 <span>{item.length}</span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// const TypeRollOut = ({ chapter }) => {
//   if (!chapter) {
//     return <div>Loading...</div>;
//   }

//   if (chapter.media == "music") {
//     chapter.itemList.map((item, idx) => {
//       return (
//         <div
//           key={item.name}
//           className="foc-row"
//           // onClick={() => histClick(chapter, item)}
//         >
//           <span>{idx + 1}</span>
//           <span>{item.name}</span>
//           <span>{item.length}</span>
//         </div>
//       );
//     });
//   } else if (chapter.media == "photo") {
//     chapter.itemList.map((item, idx) => {
//       return (
//         <div
//           key={item.name}
//           className="foc-row"
//           // onClick={() => histClick(chapter, item)}
//         >
//           <img src={`../../../assets/${chapter.folder}/${item.url}`}></img>
//           <span>{idx + 1}</span>
//           <span>{item.name}</span>
//         </div>
//       );
//     });
//   } else {
//     console.log("bad data!" + chapter.media);
//   }
// };

export const FocusOnIt = ({ chapType }) => {
  const { updateHistory } = useHistory();
  const histClick = (chap, item) => {
    const addedItem = {
      iName: chap.authSh + " - " + item.name,
      fUrl: chap.folder,
      sUrl: item.url,
      aUrl: chap.media,
      media: chap.media,
    };
    updateHistory(addedItem);
  };

  const chapParam = useParams().albID;
  let thisChap;
  if (chapType == "music") {
    thisChap = sketches.find((alb) => alb.srcUrl == chapParam);
  } else if (chapType == "photo") {
    thisChap = imgDataObj.find((alb) => alb.srcUrl == chapParam);
  } else {
    console.log("Bad data!");
  }

  return (
    <>
      <Link to="../index">
        <div className="back-btn">
          <p>↚</p>
          <p>BACK</p>
        </div>
      </Link>

      <div className="focus-cont">
        <img src={`../../../assets/icons/${thisChap.artUrl}`}></img>
        <div className="focus-meta">
          <p>{thisChap.media}</p>
          <p>{thisChap.author}</p>
          <p>{thisChap.title}</p>
          <p>{thisChap.postDt}</p>
          <p>{thisChap.folder}</p>
        </div>

        {/* <TypeRollOut media={chapType} chapter={thisChap} /> */}

        {thisChap.media == "music" && (
          <div className="focus-rows">
            {thisChap.itemList.map((item, idx) => {
              return (
                <div
                  key={item.name}
                  className="foc-row"
                  onClick={() => histClick(thisChap, item)}
                >
                  <span>{idx + 1}</span>
                  <span>{item.name}</span>
                  <span>{item.length}</span>
                </div>
              );
            })}
          </div>
        )}
        {thisChap.media == "photo" && (
          <div className="focus-cards">
            {thisChap.itemList.map((item, idx) => {
              return (
                <div
                  key={item.name}
                  className="foc-card"
                  onClick={() => histClick(thisChap, item)}
                >
                  <img
                    src={`../../../assets/pictures/${thisChap.folder}/${item.url}`}
                  ></img>
                  <span>{idx + 1}</span>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

FocusOnIt.propTypes = {
  chapType: PropTypes.string,
};

// TypeRollOut.propTypes = {
//   media: PropTypes.string,
//   chapter: PropTypes.object,
// };
