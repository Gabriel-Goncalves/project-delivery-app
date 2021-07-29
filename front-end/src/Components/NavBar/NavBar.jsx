import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../service/getLocalStorage';

export default function NavBar({ screen }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <ul>
      <li data-testid="customer_products__element-navbar-link-products">
        {screen}
      </li>
      <li data-testid="customer_products__element-navbar-link-orders">
        Meus Pedidos
      </li>
      <li data-testid="customer_products__element-navbar-user-full-name">
        {getUserInfo().name}
      </li>
      <li data-testid="customer_products__element-navbar-link-logout">
        <button onClick={ logout } type="button">
          Sair
        </button>
      </li>
    </ul>
  );
}

NavBar.propTypes = {
  screen: PropTypes.string.isRequired,
};