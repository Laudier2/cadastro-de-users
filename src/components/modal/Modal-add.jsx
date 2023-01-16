import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './modal.css';
import { api } from '../../api';

const ModalAdd = () => {
  const [values, setValues] = useState([]);

  const history = useHistory();

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };

  function onSubmit(ev) {
    ev.preventDefault();

    api.post("/user/", values)
    .then((res) => {
        alert('O usuário foi Criado com sucesso', res);

        window.location.reload()
      })
      .catch((erro) => {
        alert(
          `Houve um erro ao tenta criar esse usuário, erro relacionado a ${erro}`
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
          <img src={values.image} alt="img" style={{width: 50}} />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">URL img</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="image"
            name="image"
            value={values.image}
            onChange={onChange}
          />
        </div>
      <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Nome</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            name="name"
            value={values.name}
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
            placeholder="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Password</i>
            </div>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Phone</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Estado</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="state"
            name="state"
            value={values.state}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className=" p-1 text-info">Cep</i>
            </div>
          </div>
          <input
            type="bairro"
            className="form-control"
            placeholder="cep"
            name="cep"
            value={values.cep}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className=" p-1 text-info">Cidade</i>
            </div>
          </div>
          <input
            type="bairro"
            className="form-control"
            placeholder="city"
            name="city"
            value={values.city}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Bairro</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="district"
            name="district"
            value={values.district}
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
            className="form-coentrol border border-0"
            placeholder="street"
            name="street"
            value={values.street}
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
            placeholder="apartment_or_house"
            name="apartment_or_house"
            value={values.apartment_or_house}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="fp-1 text-info">Número</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="number"
            min="0"
            name="number"
            value={values.number}
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
