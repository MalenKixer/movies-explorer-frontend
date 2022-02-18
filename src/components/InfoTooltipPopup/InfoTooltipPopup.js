import Popup from "../Popup/Popup";
import './InfoTooltipPopup.css'

function InfoTooltipPopup(props){
    return(
        <Popup onClose={props.onClose} isOpen={props.isOpen} deleteCloseIcon={true} >
            <div className="info-tool">
                <div className={`info-tool__icon ${props.isFail ? 'info-tool__icon_succes' : 'info-tool__icon_fail'}`}></div>
                <p className="info-tool__subtitle">{props.isFail ? props.messageSucces : props.messageFail}</p>
            </div>
        </Popup>
    )
}
export default InfoTooltipPopup;