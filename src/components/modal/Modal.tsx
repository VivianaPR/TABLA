import React, { useState, useEffect } from "react";
import "./Modal.css";

interface CustomModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  children: React.ReactNode;
  closeModalOut: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({
  show,
  onHide,
  title,
  children,
  closeModalOut
}) => {
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (show) {
      setShowModal(true);
    } else {
      setClosing(true);
      setTimeout(() => {
        setShowModal(false);
        setClosing(false);
      }, 200);
    }
  }, [show]);

  const handleHide = () => {
    if (closeModalOut) {
      setClosing(true);
      setTimeout(() => {
        onHide();
        setClosing(false);
      }, 200);
    }
  };

  return (
    <div
      className={`modal-overlay ${showModal ? "show" : ""} ${closing ? "hide" : ""}`}
      onClick={handleHide}
    >
      <div
        className={`modal-container ${showModal ? "show" : ""} ${closing ? "hide" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal_header">
          <span>{title}</span>
          <button className="close_button" onClick={onHide} type="button">
            &times;
          </button>
        </div>
        <div className="modal_body">{children}</div>
      </div>
    </div>
  );
};

export { CustomModal };
