import React, { useEffect, useState } from 'react';
import './modal.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const camposIniciasDeValores = {
  name: '',
  sobrenome: '',
  email: '',
  phone: '',
  cep: '',
  city: '',
  district: '',
  apartment_or_house: '',
  state: '',
  street: '',
  number: '',
};
/*
name,
password,
email,
phone,
cep,
city,
district,
apartment_or_house,
state,
street,
number*/

const Modal2 = (props) => {
  const [values, setValues] = useState(props);

  console.clear();
  console.log(camposIniciasDeValores);


  useEffect(() => {
    if (props.idAtual) {
      axios
        .get(`${process.env.REACT_APP_API_URL}${props.idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [props.idAtual]);

  const history = useHistory();
  console.log(props.users)

  const ApagaProduto = () => {
    axios //Esse process.env.REACT_APP_API_URL é uma variave de ambiente que contem a url da api
      .delete(`${process.env.REACT_APP_API_URL}${props.idAtual}`)
      .then((res) => {
        alert('O Usuário foi deletado com sucesso ');
        history.push('/users');
        window.location.reload();
      })
      .catch((erro) => {
        alert(
          'Houve um erro ao tenta apaga esse produto, erro relacionado a ' +
            erro
        );
        history.push('/users');
        window.location.reload();
      });
  };


  return (
    <>
      <div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Ao clica em apaga. O usúario {values.name} sera deletado!</i>
            </div>
          </div>
        </div>        
        <button className="btn btn-primary btn-block" onClick={ApagaProduto}>Apaga</button>
      </div>
    </>
  );
};

export default Modal2;
