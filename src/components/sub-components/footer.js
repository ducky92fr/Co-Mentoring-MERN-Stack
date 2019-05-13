import React from "react";

const footer =  props => {
  return (
    <footer>
        <div className="content has-text-centered has-text-white">
      {props.children}
      </div>
</footer>
  );
};


export default footer
