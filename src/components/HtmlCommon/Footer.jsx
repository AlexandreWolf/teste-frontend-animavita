import React from "react";

export const Footer = ({ className, children }) => {

  return (
    <footer className={className}>
      {children}
    </footer>
  )
}

Footer.defaultProps = {
  className: '',
  children: <div></div>
}

export default Footer