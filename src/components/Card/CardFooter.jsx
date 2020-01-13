import React from "react";
import Ul from "../HtmlCommon/Ul";
import Section from "../HtmlCommon/Section";
import Div from "../HtmlCommon/Div";

export const CardFooter = ({ title, otherNames }) => {

  const renderOtherNames = otherNames => {
    return otherNames.map((x, i) => <li className="card__footer__item" key={`${i}${x}`}>{x}</li>)
  }

  return (
    <Section className="card__footer">
      <Div className="card__footer__title">{title}</Div>
      <Ul className="card__footer__items">
        {renderOtherNames(otherNames)}
      </Ul>
    </Section>
  )
}

CardFooter.defaultProps = {
  title: "Outros nomes:",
  otherNames: []
}

export default CardFooter