import React from "react";

import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardFooter from "./CardFooter";

export const CardContent = ({ title, description, otherNames, active }) => {

  return (
    <div className={`card__content ${(active) ? 'card__content--active' : ''}`}>
      <CardTitle title={title} />
      <CardDescription description={description} />
      {(otherNames && Boolean(otherNames.length)) &&
        <CardFooter title="Outros nomes:" otherNames={otherNames} />
      }
    </div>
  )
}

CardContent.defaultProps = {
  title: "",
  description: "",
  otherNames: []
}

export default CardContent