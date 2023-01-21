import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './modal.css';
import { api } from '../../api';

const ModalAdd = (props) => {
  const [values, setValues] = useState([]);
  /*const [cep, setLocal1] = useState('');
  const [city, setLocal2] = useState('');
  const [district, setLocal3] = useState('');
  const [street, setLocal4] = useState('');
  const [number2, setLocal5] = useState('');
  const [state, setLocal6] = useState('');
  const [apartment_or_house, setLocal7] = useState('');
  const [iduser, setLocal8] = useState('');

  useEffect(() => {
    const LocalName = async () => {
      const req = await localStorage.getItem('cep');
      const res = await JSON.parse(req);
      setLocal1(res);
    };
    LocalName();

    const LocalSobrenome = async () => {
      const req = await localStorage.getItem('city');
      const res = await JSON.parse(req);
      setLocal2(res);
    };
    LocalSobrenome();

    const LocalEmail = async () => {
      const req = await localStorage.getItem('district');
      const res = await JSON.parse(req);
      setLocal3(res);
    };
    LocalEmail();

    const LocalTelefone = async () => {
      const req = await localStorage.getItem('street');
      const res = await JSON.parse(req);
      setLocal4(res);
    };
    LocalTelefone();

    const LocalCep = async () => {
      const req = await localStorage.getItem('number2');
      const res = await JSON.parse(req);
      setLocal5(res);
    };
    LocalCep();

    const LocalCity = async () => {
      const req = await localStorage.getItem('state');
      const res = await JSON.parse(req);
      setLocal6(res);
    };
    LocalCity();

    const LocalBairro = async () => {
      const req = await localStorage.getItem('apartment_or_house');
      const res = await JSON.parse(req);
      setLocal7(res);
    };
    LocalBairro();

    const LocalIduser = async () => {
      const req = await localStorage.getItem('id_user');
      const res = await JSON.parse(req);
      setLocal8(res);
    };
    LocalIduser()

  }, []);

  useEffect(() => {
    const result = {
      state,
      street,
      cep,
      apartment_or_house,
      city,
      number2,
      district,
      iduser
    };

    setValues(result);
  }, [
    state,
      street,
      cep,
      apartment_or_house,
      city,
      number2,
      district,
      iduser
  ]);

  const localCreate = (e) => {
    localStorage.setItem('apartment_or_house', JSON.stringify(e.apartment_or_house));
    localStorage.setItem('district', JSON.stringify(e.district));
    localStorage.setItem('street', JSON.stringify(e.street));
    localStorage.setItem('city', JSON.stringify(e.city));
    localStorage.setItem('cep', JSON.stringify(e.cep));
    localStorage.setItem('number2', JSON.stringify(e.number2));
    localStorage.setItem('state', JSON.stringify(e.state));
    localStorage.setItem('id_user', JSON.stringify(e.iduser));
  };
*/

const history = useHistory();

const onChange = (ev) => {
  const { name, value } = ev.target;
  setValues({ ...values, [name]: value});
};

console.log(props)

function onSubmit(ev) {
    ev.preventDefault();

    setTimeout(() => {
      console.log(values)
    }, 50)

    api.post("/adress2/", values)
    .then((res) => {
        alert('Endereço cadastrado com sucesso', res);

        history.push('/users');
        window.location.reload()
      })
      .catch((erro) => {
        alert(
          `Houve um erro ao tenta criar esse usuário, erro relacionado a ${erro}`
        );

        //localStorage.clear();
        history.push('/users');
        //window.location.reload();
      });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
    
      <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Estado</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Estado"
            name="state"
            value={values.state}
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
              <i className="p-1 text-info">Bairro</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Bairro"
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
            className="form-control"
            placeholder="Rua"
            name="street"
            value={values.street}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Apartamento ou casa</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Apartamento ou casa"
            name="apartment_or_house"
            value={values.apartment_or_house}
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
            type="text"
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
              <i className=" p-1 text-info">Número</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Número"
            name="number2"
            value={values.number2}
            onChange={onChange}
          />
        </div>   
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className=" p-1 text-info">Id_user</i>
            </div>
          </div>
          <input
            type="text"
            placeholder="id_user"
            name="id_user"
            value={values.id_user}
            onChange={onChange}
          />
        </div> 
        <button
          type="submit"
          className="btn btn-primary btn-block"
        >Salvar</button>         
      </form>
    </>
  );
};

export default ModalAdd;
