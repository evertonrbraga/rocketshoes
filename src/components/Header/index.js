import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

import { Container, Cart } from "./styles";

import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div>
      <Container>
        <Link to="/">
          <img src={logo} />
        </Link>
        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>3 itens</span>
          </div>
          <MdShoppingBasket size={36} color="#fff" />
        </Cart>
      </Container>
    </div>
  );
};

export default Header;
