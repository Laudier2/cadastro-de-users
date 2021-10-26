import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <h2 className="titolo2 mx-auto text-dark">
            Sistema de Cadastro de Usuários
          </h2>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-light p-4 col-md-1"></div>
        <a className="nav-link text-dark ef" href="/users">
          <i className="fas fa-list-ol text-info h1"></i>
          <p className="ml-2 marg">Clientes</p>
        </a>
        <a className="nav-link text-dark ef" href="/">
          <i className="fas fa-id-badge text-info marg h1" />
          <p className="ml-2 marg">Cadastra</p>
        </a>
      </div>
    </>
  );
};

export default Nav;
