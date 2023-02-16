import React from 'react';
import './modal.css';

const Modal = ({ dados }) => {

  return (
    <>
      <div className="container col-sm-8 bg-img1">
        <ul>
          <li style={{listStyle: "none"}}>
            <strong className="text-primary"></strong>{' '}
            <img src={dados.image} alt="img" style={{width: 150, margin: 25}} />
          </li>
          <li>
            <strong className="text-primary">Nome:</strong> {dados.name}
          </li>
          <li>
            <strong className="text-primary">E-mail</strong> {dados.email}
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
          <li>
            {' '}
            <strong className="text-primary">CEP:</strong> {dados.cep}
          </li>
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
            {dados.number1}
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
