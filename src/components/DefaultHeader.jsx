import React from "react";
import Header from "./HtmlCommon/Header";
import H1 from "./HtmlCommon/H1";
import Image from "./HtmlCommon/Image";

import logo from '../assets/logo.svg';

export const DefaultHeader = ({ name }) => {

  return (
    <Header className="header">
      <Image className="header__image" image={logo} alt="Logo AnimaVita" />
      <H1 className="header__title">{name}</H1>
    </Header>
  )
}

DefaultHeader.defaultProps = {
  name: ''
}

export default DefaultHeader
