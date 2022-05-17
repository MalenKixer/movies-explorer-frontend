import Popup from "../Popup/Popup";
import './InfoTooltipPopup.css'

function InfoTooltipPopup(props){
    return(
        <Popup onClose={props.onClose} isOpen={props.isOpen} deleteCloseIcon={true} >
            <div className="info-tool">
                <div className={`info-tool__icon ${props.isFail ? 'info-tool__icon_fail' : 'info-tool__icon_succes'}`}></div>
                <p className="info-tool__subtitle">{props.isFail ? props.messageFail : props.messageSucces}</p>
            </div>
        </Popup>
    )
}
export default InfoTooltipPopup;