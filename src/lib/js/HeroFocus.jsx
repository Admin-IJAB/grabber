import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

export const HeroFocus = ({ title, path, folder, refId }) => {
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
        {console.log(title, path, folder, refId)}
      </div>

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
            <div className="mode-test-1" />
          </Transition.Child>

          <div className="mode-test-2">
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
                  <Dialog.Title>~lookin at the {title} box~</Dialog.Title>
                  <Dialog.Description>
                    if you are looking at this box you are looking at this box {refId} &&&&&&& {path}
                  </Dialog.Description>

                  <p>{folder}</p>
                  <button onClick={() => setIsOpen(false)}>Close</button>
                </Dialog.Panel>

              </Transition.Child>

            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}