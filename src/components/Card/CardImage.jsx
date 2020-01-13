import React from "react";
import Image from '../HtmlCommon/Image'
import imageDefault from "../../assets/img/teste.jpg"

export const CardImage = ({ image, title }) => {

  return (
    <figure className="card__figure">
      <Image className="card__image" image={image} alt={title} />
    </figure>
  )
}

CardImage.defaultProps = {
  title: "",
  image: imageDefault
}

export default CardImage