import React from "react";
import { createPortal } from "react-dom";
import "./routesModal.css";
import CloseButton from '../../../assets/icons/close_button.png'

const RoutesModal = ({ isModalOpen, closeModal, children }) => {
  if (!isModalOpen) return null;

  return createPortal(
    <div className="routes-modal__overlay" onClick={closeModal}>
      <div className="routes-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="routes-modal__close" onClick={closeModal}>
          <img src={CloseButton} alt="close button" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default RoutesModal;
