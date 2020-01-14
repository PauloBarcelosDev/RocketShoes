import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo  from '../../assests/images/Logo.svg';

 function Header({cartSize}) {
     return (
    <Container>
        <Link to='/'>
          <div id="logo">
            <img src={logo} alt="Rocketshoes" />
          </div>
         </Link>
         <Cart to="/cart">
           <div>
              <strong> Meu Carrinho</strong>
              <span> {cartSize} Itens</span>
           </div>
           <MdShoppingBasket size={36} color="#FFF"/>
         </Cart>
    </Container>
  );
}
export default connect( state =>({
  cartSize: state.cart.length,
}))(Header);
