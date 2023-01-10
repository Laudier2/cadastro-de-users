import React from 'react';
import './modal.css';

const Modal = ({ dados }) => {
  console.clear();
  console.log(dados);

  return (
    <>
      <div className="container col-sm-8 bg-img1">
        <ul>
          <li>
            <strong className="text-primary">Nome:</strong> {dados.name}
          </li>
          <li>
            <strong className="text-primary">Sobrenome:</strong>{' '}
            {dados.sobrenome}
          </li>
          <li>
            <strong className="text-primary">E-mail</strong> {dados.email}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Data de Nacimento:</strong>{' '}
            {dados.nacimento}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Telefone:</strong> {dados.phone}
          </li>
          <li>
          <li>
            {' '}
            <strong className="text-primary">UF:</strong> {dados.state}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Cidade:</strong> {dados.city}
          </li>
            {' '}
            <strong className="text-primary"> CEP:</strong> {dados.cep}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Bairro:</strong> {dados.district}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Rua:</strong> {dados.street}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Número:</strong>
            {dados.number}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Casa ou apartamento:</strong> {dados.apartment_or_house}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Modal;
