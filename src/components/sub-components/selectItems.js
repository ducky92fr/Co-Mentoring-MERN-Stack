import React from "react"
const selectItems = props => {
  return (
    <div class="select">
      <select>
        {props.children}
      </select>
    </div>
  )}
export default selectItems
