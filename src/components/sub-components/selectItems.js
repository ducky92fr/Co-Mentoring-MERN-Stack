import React from "react"
const selectItems = props => {
  return (
    <div className="select is-small">
      <select defaultValue = {props.defaultVal}>
        {props.children}
      </select>
    </div>
  )}
export default selectItems
