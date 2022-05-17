import React from 'react'
import Popup from '../Popup/Popup';
import './Preloader.css'

const Preloader = React.memo((props) => {
    return (
        <Popup isOpen={props.isOpen} deleteCloseIcon={true}>
            <div className="preloader">
                <div className="preloader__container">
                    <span className="preloader__round"></span>
                </div>
            </div>
        </Popup>
    )
});

export default Preloader
