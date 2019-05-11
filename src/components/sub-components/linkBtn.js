import React from "react";

const Button = (props) => { 
  return (
    <p className = "control">
      <button className={props.styles} onClick = {props.click} type ={props.type} valuemodal ={props.value}>{props.btnName}</button>
    </p>
  )
}
export default Button
