import { Dialog } from "@headlessui/react";
import { useState } from "react";

export const HeroFocus = () => {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel>
                <Dialog.Title>~lookin at the box~</Dialog.Title>
                <Dialog.Description>
                    if you are looking at this box you are looking at this box if you are looking at this box you are looking at this box if you are looking at this box you are looking at this box if you are looking at this box you are looking at this box if you are looking at this box you are looking at this box 
                </Dialog.Description>

                <p>
                    We're inside the P tag now, can ya tell?
                </p>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </Dialog.Panel>
        </Dialog>
    )
}