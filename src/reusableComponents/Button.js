import React from "react";

const Button = (props) => {
  const className = `btn btn-${props.size} btn-${props.type}`;
  //className={className}
  return (
    <button
      type="button"
      className={className}
      onClick={props.handleClick}
      style={{ marginRight: "2%" }}
    >
      {props.label}
    </button>
  );
};
Button.defaultProps = {
  type: "secondary",
};
export default Button;
