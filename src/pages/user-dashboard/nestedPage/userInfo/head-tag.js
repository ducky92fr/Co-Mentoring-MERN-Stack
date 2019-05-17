import React from "react";
const Tag = (props) => { 
  return (
    <div className="columns is-vcentered">
  <div className="column has-text-centered is-size-5 has-text-white has-background-link">
  {props.content}
  </div>
</div>
  )
}
export default Tag

