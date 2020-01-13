import React from "react";

export const CardDescription = ({ description }) => {

  return (
    <div dangerouslySetInnerHTML={{__html: description}} className="card__text"/>
  )
}

CardDescription.defaultProps = {
  description: ""
}

export default CardDescription
