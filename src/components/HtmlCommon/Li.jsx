import React from "react";

export const Li = ({ className, children, keyValue }) => {
  return (
    <li className={className} key={keyValue}>
      {children}
    </li>
  )
}

Li.defaultProps = {
  className: '',
  children: <div></div>,
  keyValue: Date.now()
}

export default Li