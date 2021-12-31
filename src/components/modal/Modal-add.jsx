import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './modal.css';
import axios from 'axios';

const camposIniciasDeValores = {
  name: '',
  sobrenome: '',
  email: '',
  phone: '',
  cep: '',
  city: '',
  bairro: '',
  endereco2: '',
  casa: '',
  cpf: '',
  nacimento: '',
  rendaMes: '',
  uf: '',
  numero: '',
  rua: '',
};

const ModalAdd = () => {
  const [values, setValues] = useState(camposIniciasDeValores);

  const history = useHistory();

  console.clear();
  console.log(camposIniciasDeValores);

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };

  function onSubmit(ev) {
    ev.preventDefault();

    
    const url = `${process.env.REACT_APP_API_URL}`;

    axios.post(url, values)
    .then((res) => {
        alert('O usuário foi Criado com sucesso');

        history.push('/users');
        window.location.reload()
      })
      .catch((erro) => {
        alert(
          'Houve um erro ao tenta criar esse usuário, erro relacionado ao E-mail, tente novamente'
        );

        //localStorage.clear();
        history.push('/');
        //window.location.reload();
      });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Nome</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Seu Nome"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">SobreNome</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Sobrenome"
            name="sobrenome"
            value={values.sobrenome}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">E-mail</i>
            </div>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Cidade</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Cidade"
            name="city"
            value={values.city}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">UF</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="UF"
            name="uf"
            value={values.uf}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className=" p-1 text-info">Bairro</i>
            </div>
          </div>
          <input
            type="bairro"
            className="form-control"
            placeholder="Bairro"
            name="bairro"
            value={values.bairro}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Rua</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Rua"
            name="rua"
            value={values.rua}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Logradouro</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Complemento"
            name="casa"
            value={values.casa}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="fp-1 text-info">Telefone</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Telefone"
            min="0"
            name="phone"
            value={values.phone}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">CEP</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="CEP"
            name="cep"
            value={values.cep}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Nº</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Número"
            name="numero"
            value={values.numero}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Endereco 2 opcional</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Endereco2"
            name="endereco2"
            value={values.endereco2}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-2 text-info">Data de Nacimento</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Idade ex: 01/01/2000"
            name="nacimento"
            value={values.nacimento}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">CPF</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="CPF"
            name="cpf"
            value={values.cpf}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-2 text-info">Renda Mensal</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Renda mensal"
            name="rendaMes"
            value={values.rendaMes}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value={'Salvar'}
          className="btn btn-primary btn-block"
        />
      </form>
    </>
  );
};

export default ModalAdd;
