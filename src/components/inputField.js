import React from "react"
const inputField = props => {
  console.log(props)
  return (
    <div className="field">
      {props.label ? <label className="label">{props.label}</label> : null}
      <div className={"control " + props.icon} >
      {props.children}
    </div>
    {props.err ? <p className="help is-danger">{props.err}</p> :null}
    </div>
  )}
export default inputField
