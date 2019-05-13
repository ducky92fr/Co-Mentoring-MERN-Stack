import React from "react"
const inputField = props => {
  return (
    <div className="field">
      {props.label ? props.label : null}
      <div className="control has-icons-left ">
      {props.children}
    </div>
    </div>
  )}
export default inputField
