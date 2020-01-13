import React from "react";

export const H1 = ({ className, children }) => {
  return (
    <h1 className={className}>
      {children}
    </h1>
  )
}

H1.defaultProps = {
  className: '',
  children: <div></div>
}

export default H1