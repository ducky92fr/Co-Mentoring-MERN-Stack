import React from "react"
const inputField = props => {
  return (
    <div className={props.grouped ? "field " + props.grouped : "field"}>
      {props.label ? <label className="label">{props.label}</label> : null}
      <div className={"control " + props.icon} >
      {props.children}
    </div>
    {props.err ? <p className="help is-danger">{props.err}</p> :null}
    {props.err1? <p className="help is-danger">{props.err1}</p> :null}
    </div>
  )}
export default inputField
