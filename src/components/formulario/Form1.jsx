import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mask, unMask } from 'remask';

const Form1 = () => {
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  //const [local, setLocal] = useState('');

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setData({ ...data, [name]: value });
  };

  const onChange1 = (ev) => {
    const Mascara1 = unMask(ev.target.value);
    const Mascara2 = mask(Mascara1, ['(99) 999999999']);

    setData2(Mascara2);
    console.log(Mascara2);
    localStorage.setItem('telefone', JSON.stringify(data2));
  };

  const localCreate = (e) => {
    localStorage.setItem('name', JSON.stringify(e.name));
    localStorage.setItem('sobrenome', JSON.stringify(e.sobrenome));
    localStorage.setItem('email', JSON.stringify(e.email));
  };

  return (
    <>
      <div className="container col-md-8 text-white">
        <form>
          <h4
            className="mx-auto text-white mb-3 titolo text-dark"
            style={{ width: 330, marginTop: 50 }}
          >
            Preecha os campos abaixo{' '}
            <Link to="/form2" className="btn btn-info">
              Form2
            </Link>
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
              value={data2}
              onChange={onChange1}
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
