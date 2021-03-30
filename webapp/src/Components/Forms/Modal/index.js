import React, { useState } from 'react';
import '../styles.css';

const Modal = ({ concealModal, toggleModal, children }) => {
  if (concealModal) return null;

  return [
    <div className="modalContainer" onClick={() => toggleModal()} />,
    <div className="modalWrap">
      <div className="modal">
        {children}
      </div>
    </div>
  ];
}

export default Modal;