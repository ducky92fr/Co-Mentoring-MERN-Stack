import React from "react";
const Tag = (props) => { 
  return (
    <div class="columns is-vcentered">
  <div class="column has-text-centered is-size-5 has-text-white has-background-link">
  {props.content}
  </div>
</div>
  )
}
export default Tag

