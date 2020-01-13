import React from "react";

export const Image = ({ className, image, alt }) => {
  return (
    <img className={className} src={image} alt={alt} />
  )
}

Image.defaultProps = {
  className: '',
  alt: '',
  src: ''
}

export default Image