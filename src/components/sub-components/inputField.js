import React from "react"
const inputField = props => {
  return (
    <div className="field">
      <div className="control has-icons-left">
        <input className="input" type={props.name} name ={props.name} placeholder={props.placeholder} value ={props.value} autoComplete="on" />
          <span className="icon is-small is-left">
              <i className={props.fontAwsome}></i>
          </span>
      </div>
      <p className="help is-danger">{props.error}</p>
    </div>
  )}
export default inputField
