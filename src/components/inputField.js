import React from "react"
const inputField = props => {
  console.log(props)
  return (
    <div className="field">
      {props.label ? props.label : null}
      <div className="control has-icons-left ">
      {props.children}
    </div>
    {props.err ? <p className="help is-danger">{props.err}</p> :null}
    </div>
  )}
export default inputField
