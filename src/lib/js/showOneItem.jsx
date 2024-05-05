import { Dialog, Transition } from "@headlessui/react";
import { useState, useEffect, Fragment } from "react";

import { imgDataObj } from "../data/img-meta";
import { sketches } from "../data/mp3-meta";

export const infoPopout = (itemMedia, itemFolder, itemIdx) => {
  const [lookinAt, setLookinAt] = useState({
    head: " L. Mauro - 5D",
    fold: "2021_LM-BCC",
    src: "11_lm_5d-bcc.mp3",
    art: "aa_lm_bcc.png",
    media: "music"
  })
  const [isOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true)

    let foundChap;
    if (itemMedia == "photo") {
      foundChap = imgDataObj.find(meta => meta.folder == itemFolder)

    } else if (itemMedia == "music") {
      foundChap = sketches.find(meta => meta.folder == itemFolder)

    } else {
      console.log("bad data!")
    }
    const foundItem = foundChap.itemList[itemIdx];
    const allMeta = { ...foundChap, ...foundItem }
    setLookinAt({
      head: `${allMeta.authSh} - ${allMeta.name}`,
      fold: allMeta.folder,
      src: allMeta.url,
      art: allMeta.artUrl,
      media: allMeta.media,
    })
    // console.log(lookinAt)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>

      <button type="button" onClick={openModal} className="info-btn">
        i
      </button>

      <div className="info-mod-cont">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="open-dialog" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div>hello</div>
            </Transition.Child>
            <div className="mode-test-3">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >

                <Dialog.Panel>
                  <Dialog.Title>Item Title: {lookinAt.head}</Dialog.Title>
                  <Dialog.Description>
                    Item Folder: {lookinAt.fold}  Item Url: {lookinAt.src}
                  </Dialog.Description>

                  <p>Item Media: {lookinAt.media}</p>
                  <button onClick={() => setIsOpen(false)}>Close</button>
                </Dialog.Panel>

              </Transition.Child>

            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}