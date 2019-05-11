import React from "react"
const inputField = props => {
  return (
    <div className="field">
      <div className="control has-icons-left has-icon-right">
        <input className="input" type={props.type} name ={props.name} placeholder={props.placeholder}  onChange ={props.change} autoComplete="on" />
          <span className="icon is-small is-left">
              <i className={props.fontAwsome}></i>
          </span>
      </div>
      <p className="help is-danger">{props.err}</p>
    </div>
  )}
export default inputField
