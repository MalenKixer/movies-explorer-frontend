import './Popup.css'; 
import React from 'react';

const Popup = React.memo((props) =>{
    return(
      <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className='popup__container'>
          <button className='popup__close-icon' type="button" aria-label="close" onClick={props.onClose}></button>
          {props.children}
        </div>
        <div className="popup__overlay" onClick={props.onClose}></div>
      </div>
    )
})

export default Popup;