import React from "react";

export const Button = ({ className, children, onClick }) => {
  return (
    <button type={'button'} className={className} onClick={() => onClick()}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: '',
  children: '',
  onClick: () => null
}

export default Button