import React from 'react';
import ReactDOM from "react-dom";
import './modal.css'
import CloseButton from '../../../assets/icons/close_button.png'

const Modal = ({ isModalOpen, closeModal, loginAccount, registrationModalOpen, setRegistrationModalOpen, registerUser, children}) => {
    if (!isModalOpen) return null;
    const childWithProps = React.cloneElement(children, { loginAccount, registrationModalOpen, setRegistrationModalOpen, registerUser });

  return ReactDOM.createPortal (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={closeModal}><img src={CloseButton} alt="close button" /></button>
        {childWithProps}
        {/* {children} */}
      </div>
    </div>,
    document.body
  )
}

export default Modal
