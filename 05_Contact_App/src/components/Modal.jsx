import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="z-50 relative min-h-[200px] max-w-[80%] bg-white p-4 m-auto">
            <div className="flex justify-end cursor-pointer">
              <AiOutlineClose onClick={onClose} className="text-2xl " />
            </div>
            {children}
          </div>
          <div 
          onClick={onClose}
          className="absolute top-0 z-40 backdrop-blur h-screen w-screen"/>
        </>
      )}
    </>
  ,document.getElementById("modal-root"));
};

export default Modal;
