import React, { useEffect, useState } from "react";
import "./Modal.css";
import { CSSTransition } from "react-transition-group";

export const Modal = (props) => {
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    setModalState(true);
  }, []);

  return (
    <>
      <div
        className="dark-bg"
        onClick={() => {
          props.setModalShow(false);
        }}
      />
      <div className="modal">
        <CSSTransition
          in={modalState}
          unmountOnExit
          classNames="modal-transition"
          timeout={300}
        >
          <img
            className="modal-image"
            src={props.imageUrl}
            alt="review images"
          />
        </CSSTransition>
      </div>
    </>
  );
};
