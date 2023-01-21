import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mask, unMask } from 'remask';
import "./form.css"

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
    localStorage.setItem('phone', JSON.stringify(data2));
  };

  const localCreate = (e) => {
    localStorage.setItem('name', JSON.stringify(e.name));
    localStorage.setItem('password', JSON.stringify(e.password));
    localStorage.setItem('email', JSON.stringify(e.email));
    localStorage.setItem('image', JSON.stringify(e.image));
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
            <Link to="/form2" className="btn btn-info mt-2" style={{ marginLeft: 250 }}>
          <i class="fa-solid fa-arrow-right"></i>
          </Link>
          </h4>

          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
              <i class="fa-solid fa-user p-1 mt-2 text-info"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Nome Completo"
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
              <i class="fa-solid fa-key p-1 mt-2 text-info"></i>
              </div>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
              <i class="fa-solid fa-image p-1 mt-2 text-info"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="image"
              name="image"
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
              <i class="fa-solid fa-phone p-1 mt-2 text-info"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Telefone"
              name="phone"
              value={data2}
              onChange={onChange1}
            />
          </div>
          <Link
            to="/form2"
            className="btn btn-outline-info btn-block"
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
