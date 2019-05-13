import React from "react"
const inputItems = props => {
  return (
    <React.Fragment>
        <input className="input" type={props.type} name ={props.name} placeholder={props.placeholder}  onChange ={props.change} autoComplete="on"/>
        <span className="icon is-small is-left">
        <i className={props.fontAwsome}/>
        </span>
    </React.Fragment>
  )}
export default inputItems
