import React from "react";

export const Main = ({ children }) => {
  return (
    <main role="main">
      {children}
    </main>
  )
}

Main.defaultProps = {
  children: <div></div>
}

export default Main