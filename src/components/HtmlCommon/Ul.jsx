import React from "react";

export const Ul = ({ className, children }) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

Ul.defaultProps = {
  className: '',
  children: <div></div>
}

export default Ul