import React from "react";
import Footer from "./HtmlCommon/Footer";
import P from './HtmlCommon/P';
import Copy from './HtmlCommon/Copy';
import Image from "./HtmlCommon/Image";

import logo from '../assets/logo.svg';

export const DefaultFooter = ({ name }) => {

  const year = new Date().getFullYear()

  return (
    <Footer className="footer">
      <Image className="footer__image" image={logo} alt="Logo AnimaVita" />
      <P className="footer__text">
        <Copy />{` ${year} ${name} | Todos os direitos reservados`}
      </P>
    </Footer>
  )
}

DefaultFooter.defaultProps = {
  name: ''
}

export default DefaultFooter