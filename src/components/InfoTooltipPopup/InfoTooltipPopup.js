import { useSelector } from "react-redux";
import Popup from "../Popup/Popup";
import "./InfoTooltipPopup.css";

function InfoTooltipPopup(props) {
  const message = useSelector((state) => state.message.message);
  const isError = useSelector((state) => state.auth.error);
  const isPopupOpen = useSelector(
    (state) => state.interactive.infoToolTipPopup
  );
  return (
    <Popup onClose={props.onClose} isOpen={isPopupOpen} deleteCloseIcon={true}>
      <div className="info-tool">
        <div
          className={`info-tool__icon ${
            isError ? "info-tool__icon_fail" : "info-tool__icon_succes"
          }`}
        ></div>
        <p className="info-tool__subtitle">{message}</p>
      </div>
    </Popup>
  );
}
export default InfoTooltipPopup;
