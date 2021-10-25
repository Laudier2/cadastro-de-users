import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-info">
        <div class="container-fluid">
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
        </div>
      </nav>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-light p-4">
          <a className="nav-link text-dark ef" href="/">
            Cadastro
          </a>
          <a className="nav-link text-dark ef" href="/users">
            Clientes
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
