import React from "react";

import {
  Container,
  WrapperContent,
  Row,
  WrapperInput,
  Separator,
} from "./styles";

import logo from "../../icon/logo.png";
import searchIcon from "../../icon/search.svg";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <Container>
      <WrapperContent>
        <Row>
          <img src={logo} alt="" />
          <WrapperInput>
            <input
              placeholder="Buscar produtos, marcas e muito mais..."
              type="text"
            />
            <Separator />
            <img src={searchIcon} alt="" />
          </WrapperInput>
          <p> Até 6 meses de presente no Disney+ </p>
        </Row>

        <Row> linha 2 </Row>
      </WrapperContent>
    </Container>
  );
};

export default Header;
