import React from "react";
import Div from "../HtmlCommon/Div";

export const CardTitle = ({ title }) => {

  return (
    <Div className="card__title">{title}</Div>
  )
}

CardTitle.defaultProps = {
  title: ""
}

export default CardTitle