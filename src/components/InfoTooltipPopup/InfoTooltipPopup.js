import Popup from "../Popup/Popup";

function InfoTooltipPopup(props){
    return(
        <Popup onClose={props.onClose} isOpen={props.isOpen} name='info-tool' >
            <div className="info-tool">
                <div className={`info-tool__icon ${props.loggedIn ? 'info-tool__icon_succes' : 'info-tool__icon_fail'}`}></div>
                <p className="info-tool__subtitle">{props.loggedIn ? props.subtitleSucces : props.subtitleFail}</p>
            </div>
        </Popup>
    )
}
export default InfoTooltipPopup;