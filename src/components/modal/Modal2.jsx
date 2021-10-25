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
            <strong className="text-primary">CPF:</strong> {dados.cpf}
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
            {' '}
            <strong className="text-primary"> CEP:</strong> {dados.cep}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Cidade:</strong> {dados.city}
          </li>
          <li>
            {' '}
            <strong className="text-primary"> Bairro:</strong> {dados.bairro}
          </li>
          <li>
            {' '}
            <strong className="text-primary">UF:</strong> {dados.uf}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Rua</strong> {dados.rua}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Número:</strong>
            {dados.numero}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Casa 1:</strong> {dados.casa}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Endereco 2</strong>{' '}
            {dados.endereco2}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Renda Mensal:</strong> R$
            {dados.rendaMes}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Modal;
