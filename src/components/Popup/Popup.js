import "./Popup.css";
import React from "react";

const Popup = React.memo((props) => {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      {props.deleteCloseIcon ? (
        ""
      ) : (
        <button
          className={"popup__close-icon"}
          type="button"
          aria-label="close"
          onClick={props.onClose}
        ></button>
      )}
      {props.children}
      <div className="popup__overlay" onClick={props.onClose}></div>
    </div>
  );
});

export default Popup;
