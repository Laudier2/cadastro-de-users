import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mask, unMask } from 'remask';

const Form2 = () => {
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setData({ ...data, [name]: value });

    /*
    password",
    "email",
    "phone",
    "cep",
    "city",
    "district",
    "endereco2",
    "apartment_or_house",
    "state",
    "street",
    */
  };

  const localCreate = (e) => {
    localStorage.setItem('city', JSON.stringify(e.city));
    localStorage.setItem('apartment_or_house', JSON.stringify(e.apartment_or_house));
    localStorage.setItem('district', JSON.stringify(e.district));
    localStorage.setItem('state', JSON.stringify(e.state));
    localStorage.setItem('number', JSON.stringify(e.number));
    localStorage.setItem('apartment_or_house', JSON.stringify(e.apartment_or_house));
    localStorage.setItem('street', JSON.stringify(e.street));
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
            placeholder="Rua"
            name="street"
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
            placeholder="Bairro"
            name="district"
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
            name="apartment_or_house"
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
            name="state"
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
            name="number"
            onChange={onChange}
          />
        </div>
        <Link
          to="/form3"
          className="btn btn-outline-info btn-block"
          onClick={() => localCreate(data)}
        >
          Proximo
        </Link>
      </div>
    </div>
  );
};

export default Form2;
