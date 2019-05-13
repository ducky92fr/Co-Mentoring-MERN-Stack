import React from "react";
import './modal.css';

const Modal = (props) => {
return (
<div className="modal is-active">
  <div className="modal-background" onClick ={props.click}/>
    <div className="modal-content">
    <div className="titre">{props.titre}</div>
    {props.children}
    </div>
  <button className="modal-close is-large" aria-label="close" onClick = {props.click}/>
</div>
  )
}
export default Modal

