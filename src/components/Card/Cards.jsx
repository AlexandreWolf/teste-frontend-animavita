import React from "react";

import Card from "./Card";
import Section from "../HtmlCommon/Section";
import Ul from "../HtmlCommon/Ul";

export const Cards = ({ data }) => {

  const renderCards = data => {
    return data.map((x, i) => <Card {...x} key={`${i}${x}`} />)
  }

  return (
    <Section>
      <Ul className="cards">
        {renderCards(data)}
      </Ul>
    </Section>
  )
}

Cards.defaultProps = {
  data: []
}

export default Cards