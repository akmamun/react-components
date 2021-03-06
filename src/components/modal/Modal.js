import React from "react";
import ModalStyle from "./Modal.module.scss";

const Modal = ({ children, className, show, closeModal }) => (
    
  <div
    className={`${ModalStyle.modal} ${className}`}
    style={{ display: show ? "block" : "none" }}
  >
    <div className={ModalStyle.overlay} onClick={closeModal} />
    <div className={ModalStyle.modalContent}>
    <span className={ModalStyle.close} onClick={closeModal}>
        &times;
      </span>  
      {children}
      
    </div>
  </div>
);
export default Modal;