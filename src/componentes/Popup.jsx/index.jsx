import React from "react";
import './Popup.css'
import close from '../../assets/Vector.svg'
import logo2 from '../../assets/rublogo-form.svg'


function Popup(props){
    return (props.trigger) ? (
       
        <div className="popup">
            <div className="popup-inner">
                <img src={logo2} alt="logo RubBank" className="logo-popup"/>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    <img src={close} alt="" />
                </button>
                { props.children }
            </div>
        </div>


    ) : "";
}

export default Popup