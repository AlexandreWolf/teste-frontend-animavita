import React from "react";

export const Div = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

Div.defaultProps = {
  className: "",
  children: <div></div>
}

export default Div