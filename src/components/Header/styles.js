import styled from 'styled-components';
import {  Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

    #logo{
        transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

`;

export const Cart = styled(Link)`/** Para estilizar um component que não e nativo do HTML é necessario colocar entre parenteses ()*/
display: flex;
align-items: center;
text-decoration: none;
transition: opacity 0.2s;

&:hover {
  opacity: 0.7;
}

div {
  text-align: right;
  margin-right: 10px;
}
strong{
  display: block;
  color: #fff;
}
span {
  font-size: 12px;
  color: #999;
}

`;   
