import React from "react";

export const P = ({ className, children }) => {
  return (
    <p className={className}>
      {children}
    </p>
  )
}

P.defaultProps = {
  className: '',
  children: <div></div>
}

export default P