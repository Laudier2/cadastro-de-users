import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mask, unMask } from 'remask';

const Form2 = () => {
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setData({ ...data, [name]: value });
  };

  const localCreate = (e) => {
    localStorage.setItem('city', JSON.stringify(e.city));
    localStorage.setItem('casa', JSON.stringify(e.casa));
    localStorage.setItem('bairro', JSON.stringify(e.bairro));
    localStorage.setItem('uf', JSON.stringify(e.uf));
    localStorage.setItem('numero', JSON.stringify(e.numero));
    localStorage.setItem('rua', JSON.stringify(e.rua));
    localStorage.setItem('endereco2', JSON.stringify(e.endereco2));
  };

  const onChange1 = (ev) => {
    const Mascara1 = unMask(ev.target.value);
    const Mascara2 = mask(Mascara1, ['99999-999']);

    setData2(Mascara2);
    console.log(Mascara2);
    localStorage.setItem('cep', JSON.stringify(data2));
  };

  return (
    <div>
      <div className="container col-md-8 text-white">
        <h4
          className="mx-auto text-white mb-3 titolo text-dark"
          style={{ width: 330, marginTop: 50 }}
        >
          Preecha os enderecos 1 e 2{' '}
          <Link to="/form3" className="btn btn-info">
            Form3
          </Link>
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
            value={data2}
            name="cep"
            onChange={onChange1}
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
            placeholder="Lougradouro"
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
        <span className="titolo text-dark">
          Endereco 2 como, Bairro, Rua, Casa, Nº, sim não Deixa em branco ou
          escre Não
        </span>
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
