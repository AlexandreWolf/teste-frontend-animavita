import React, { useState } from "react";

import CardContent from "./CardContent";
import CardImage from "./CardImage";
import Article from "../HtmlCommon/Article";
import Li from "../HtmlCommon/Li";
import Div from "../HtmlCommon/Div";
import Button from "../Button";

export const Card = ({ id, ...props }) => {

  const [active, setActive] = useState(false)

  const showMore = () => {
    setActive(true)
  }

  const showLess = () => {
    setActive(false)
  }

  return (
    <Li className="cards__item" keyValue={id}>
      <Article className={`card ${(active) ? 'card--active' : ''}`}>
        <CardImage {...props} />
        <CardContent {...props} active={active} />
        <Div className="card__moreless">
          {!active &&
            <Button className="card__moreless__button" onClick={() => showMore()}>Ver mais</Button>}
          {active &&
            <Button className="card__moreless__button" onClick={() => showLess()}>Ver menos</Button>}
        </Div>
      </Article>
    </Li>
  )
}

Card.defaultProps = {
  id: Date.now()
}

export default Card
