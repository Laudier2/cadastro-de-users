import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const dados = {
  name: '',
  sobrenome: '',
  email: '',
  telefone: '',
};

const Form1 = () => {
  const [data, setData] = useState(dados);
  //const [local, setLocal] = useState('');

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setData({ ...data, [name]: value });
  };

  const localCreate = (e) => {
    localStorage.setItem('name', JSON.stringify(e.name));
    localStorage.setItem('sobrenome', JSON.stringify(e.sobrenome));
    localStorage.setItem('email', JSON.stringify(e.email));
    localStorage.setItem('telefone', JSON.stringify(e.telefone));
  };

  return (
    <>
      <div className="container col-md-8 text-white">
        <form>
          <h4
            className="mx-auto text-white mb-3 titolo text-dark"
            style={{ width: 330, marginTop: 50 }}
          >
            Preecha os campos abaixo
          </h4>

          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
                <i className="fas fa-id-badge p-1 mt-2 text-info" />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Seu Nome"
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
                <i className="fas fa-id-badge p-1 mt-2 text-info" />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Sobrenome"
              name="sobrenome"
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
                <i className="fas fa-envelope  p-1 mt-2 text-info" />
              </div>
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
                <i className="fas fa-envelope  p-1 mt-2 text-info" />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Telefone"
              name="telefone"
              onChange={onChange}
            />
          </div>
          <Link
            to="/form2"
            className="btn btn-secondary btn-block"
            onClick={() => localCreate(data)}
          >
            Proximo
          </Link>
        </form>
      </div>
    </>
  );
};

export default Form1;
