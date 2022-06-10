import React from "react";
import { useSelector } from "react-redux";
import Popup from "../Popup/Popup";
import "./Preloader.css";

const Preloader = React.memo(() => {
  const isPreloaderOpen = useSelector(
    (state) => state.interactive.preloaderOpen
  );
  return (
    <Popup isOpen={isPreloaderOpen} deleteCloseIcon={true}>
      <div className="preloader">
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>
    </Popup>
  );
});

export default Preloader;
