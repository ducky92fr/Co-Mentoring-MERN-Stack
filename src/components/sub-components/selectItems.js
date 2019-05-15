import React from "react"
const selectItems = props => {
  return (
    <div className="select is-small">
      <select defaultValue = {props.defaultVal} name ={props.name}  value={props.value} onChange={e=> props.change(e)}>
        {props.children}
      </select>
    </div>
  )}
export default selectItems
