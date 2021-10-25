import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const dados = {
  cep: '',
  city: '',
  bairro: '',
  casa: '',
  endereco2: '',
};

const Form2 = () => {
  const [data, setData] = useState(dados);

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setData({ ...data, [name]: value });
  };

  const localCreate = (e) => {
    localStorage.setItem('cep', JSON.stringify(e.cep));
    localStorage.setItem('city', JSON.stringify(e.city));
    localStorage.setItem('casa', JSON.stringify(e.casa));
    localStorage.setItem('bairro', JSON.stringify(e.bairro));
    localStorage.setItem('uf', JSON.stringify(e.uf));
    localStorage.setItem('numero', JSON.stringify(e.numero));
    localStorage.setItem('rua', JSON.stringify(e.rua));
    localStorage.setItem('endereco2', JSON.stringify(e.endereco2));
  };

  return (
    <div>
      <div className="container col-md-8 text-white">
        <h4
          className="mx-auto text-white mb-3 titolo text-dark"
          style={{ width: 330, marginTop: 50 }}
        >
          Preecha os enderecos 1 e 2
        </h4>

        <span className="titolo text-dark">Endereco 1</span>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="fas fa-id-badge p-1 mt-2 text-info" />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="CEP"
            name="cep"
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
            placeholder="Cidade"
            name="city"
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
            placeholder="Bairro e Rua"
            name="bairro"
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
            placeholder="Casa"
            name="casa"
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
            placeholder="UF"
            name="uf"
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
            placeholder="Número"
            name="numero"
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
            placeholder="Rua"
            name="rua"
            onChange={onChange}
          />
        </div>
        <span className="titolo text-dark">Endereco 2</span>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="fas fa-envelope  p-1 mt-2 text-info" />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Endereco 2"
            name="endereco2"
            onChange={onChange}
          />
        </div>
        <Link
          to="/form3"
          className="btn btn-secondary btn-block"
          onClick={() => localCreate(data)}
        >
          Proximo
        </Link>
      </div>
    </div>
  );
};

export default Form2;
