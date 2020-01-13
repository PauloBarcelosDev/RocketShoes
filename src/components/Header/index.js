import React from 'react';
import {Link} from 'react-router-dom';
import {MdShoppingBasket } from 'react-icons/md';
import logo  from '../../assests/images/Logo.svg';
 import { Container, Cart } from './styles';

export default function Header() {
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
              <span> 3 Itens</span>
           </div>
           <MdShoppingBasket size={36} color="#FFF"/>
         </Cart>
    </Container>
  );
}
