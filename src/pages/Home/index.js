import React from 'react';
import {MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function home() {
  return (
    <ProductList>
      <li>
          <img 
              src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
              alt="Tênis"
          />
          <strong> Tenis muito legal</strong>
          <span> R$129,0</span>
          <button type="button">
              <div>
                <MdShoppingCart size={16} color="#FFF" />3
              </div>
              <span> ADICIONAR AO CARRINHO</span>
          </button>
      </li>
      <li>
          <img 
              src="https://static.netshoes.com.br/produtos/tenis-mizuno-wave-ultima-11-masculino/08/D16-4105-008/D16-4105-008_detalhe2.jpg?ims=326x"
              alt="Tênis"
          />
          <strong> Tenis muito legal</strong>
          <span> R$129,0</span>
          <button type="button">
              <div>
                <MdShoppingCart size={16} color="#FFF" />3
              </div>
              <span> ADICIONAR AO CARRINHO</span>
          </button>
      </li>
      <li>
          <img 
              src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/28/D12-9970-028/D12-9970-028_detalhe2.jpg?ims=326x"
              alt="Tênis"
          />
          <strong> Tenis muito legal</strong>
          <span> R$129,0</span>
          <button type="button">
              <div>
                <MdShoppingCart size={16} color="#FFF" />3
              </div>
              <span> ADICIONAR AO CARRINHO</span>
          </button>
      </li>
      <li>
          <img 
              src="https://static.netshoes.com.br/produtos/tenis-lacoste-bayliss-masculino/05/D66-2962-205/D66-2962-205_detalhe1.jpg?ims=326x"
              alt="Tênis"
          />
          <strong> Tenis muito legal</strong>
          <span> R$129,0</span>
          <button type="button">
              <div>
                <MdShoppingCart size={16} color="#FFF" />3
              </div>
              <span> ADICIONAR AO CARRINHO</span>
          </button>
      </li>
      <li>
          <img 
              src="https://static.netshoes.com.br/produtos/tenis-caminhada-detalhes-em-couro-masculino/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x"
              alt="Tênis"
          />
          <strong> Tenis muito legal</strong>
          <span> R$129,0</span>
          <button type="button">
              <div>
                <MdShoppingCart size={16} color="#FFF" />3
              </div>
              <span> ADICIONAR AO CARRINHO</span>
          </button>
      </li>
      <li>
          <img 
              src="https://static.netshoes.com.br/produtos/tenis-new-balance-500-masculino/56/D17-4123-356/D17-4123-356_detalhe2.jpg?ims=326x"
              alt="Tênis"
          />
          <strong> Tenis muito legal</strong>
          <span> R$129,0</span>
          <button type="button">
              <div>
                <MdShoppingCart size={16} color="#FFF" />3
              </div>
              <span> ADICIONAR AO CARRINHO</span>
          </button>
      </li>
    </ProductList>
  );
}
