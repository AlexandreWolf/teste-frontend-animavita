import React from "react";

export const Article = ({ className, children }) => {
  return (
    <article className={className}>
      {children}
    </article>
  )
}

Article.defaultProps = {
  className: "",
  children: <div></div>
}

export default Article