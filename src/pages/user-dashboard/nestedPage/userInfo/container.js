import React from "react";
import ButtonGroup from './button_group'
const container = (props) => { 
  return (
    <div className = "box_container">
    <div className="container_content">
     <div>{props.name}</div>
    <div>{props.date}</div>
    </div>
    <div>{props.message}</div> 
    {props.children}
   
    
  </div>
  )
}
export default container
