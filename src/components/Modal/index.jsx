import { useState } from "react";
import { createPortal } from "react-dom";
import { BiSolidHelpCircle } from "react-icons/bi";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        title="Help"
        className={`
          absolute 
          bottom-118
          md:bottom-120
          xl:bottom-135
          -right-5
          md:right-0
          rounded-xl 
          text-1xl 
          font-bold 
          bg-yellow-700 
          hover:bg-yellow-800 
          text-white 
          p-2
          text-center 
          cursor-pointer
        `}
        onClick={() => setIsOpen(true)}
      >
        <BiSolidHelpCircle />
      </button>

      {isOpen &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-100">
              <h1 className="font-bold text-xl mb-3">Rules</h1>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-bold">Rock beats Scissors –</span> Rock
                  crushes Scissors.
                </li>
                <li>
                  <span className="font-bold">Scissors beats Paper –</span>{" "}
                  Scissors cut Paper.
                </li>
                <li>
                  <span className="font-bold">Paper beats Rock –</span> Paper
                  covers Rock.
                </li>
                <li>
                  <span className="font-bold">Additional Rule:</span> A
                  player&nbsp;
                  <span className="font-bold">
                    cannot play Rock twice in a row
                  </span>
                  . If they attempt to do so, they must choose a different move.
                </li>
              </ul>
              <div className="text-end">
                <button
                  className={`
                    mt-3
                    font-bold 
                    bg-yellow-700 
                    hover:bg-yellow-800 
                    text-white 
                    p-2
                    text-center 
                    rounded-xl 
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Modal;
