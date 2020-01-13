import React from "react";

export const Header = ({ className, children }) => {

  return (
    <header className={className}>
      {children}
    </header>
  )
}

Header.defaultProps = {
  className: '',
  children: <div></div>
}

export default Header
