import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { connect } from "react-redux";

import { Container, Cart } from "./styles";

import logo from "../../assets/logo.svg";

const Header = ({ cart, cartLength, amount }) => {
  return (
    <div>
      <Container>
        <Link to="/">
          <img src={logo} />
        </Link>
        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartLength} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#fff" />
        </Cart>
      </Container>
    </div>
  );
};

export default connect((state) => ({
  amount: state.cart.amount,
  cart: state.cart,
  cartLength: state.cart.length,
}))(Header);
