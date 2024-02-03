import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

export const HeroFocus = () => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

    return (
      <>
        <div className="mode-test">
          <button type="button" onClick={openModal} className="mode-in-btn">
            Open Modal
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Transition.Child
            //   as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="mode-test-1" />
            </Transition.Child>
            <div className="mode-test-2">
              <div className="mode-test-3">
                <Transition.Child
                //   as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                ></Transition.Child>
              </div>
            </div>
            <Dialog.Panel>
              <Dialog.Title>~lookin at the box~</Dialog.Title>
              <Dialog.Description>
                if you are looking at this box you are looking at this box if
                you are looking at this box you are looking at this box if you
                are looking at this box you are looking at this box if you are
                looking at this box you are looking at this box if you are
                looking at this box you are looking at this box
              </Dialog.Description>

              <p>Were inside the P tag now, can ya tell?</p>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </Dialog.Panel>
          </Dialog>
        </Transition>
      </>
    );
}