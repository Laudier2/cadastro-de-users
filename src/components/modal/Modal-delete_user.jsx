import React, { useEffect, useState } from 'react';
import './modal.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Modal2 = (props) => {
  const [values, setValues] = useState([]);
  const [user, setUser] = useState([]);

  console.clear();
  console.log(values);


  useEffect(() => {
    if (props.idAtual) {
      axios
        .get(`${process.env.REACT_APP_API_URL}${props.idAtual}`)
        .then((res) => {
          setValues(res.data.id);
        });
    }
  }, [props.idAtual]);

  useEffect(() => {
    if (props.idAtual) {
      axios
        .get(`${process.env.REACT_APP_API_URL}${props.idAtual}`)
        .then((res) => {
          setUser(res.data.name);
        });
    }
  }, [props.idAtual]);

  const history = useHistory();

  const ApagaProduto = async () => {
    //Esse process.env.REACT_APP_API_URL é uma variave de ambiente que contem a url da api
    await  axios.delete(process.env.REACT_APP_API_URL + values)
      .then((res) => {
        alert('O Usuário foi deletado com sucesso');
        history.push('/users');
        window.location.reload();
      })
      .catch((err) => {
        alert(
          'Houve um erro ao tenta apaga esse produto, erro relacionado a ' +
          err
        );
        history.push('/users');
        window.location.reload();
      })
    }

  return (
    <>
      <div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Ao clica em apaga. O usúario <strong className='h4 text-danger'>'{user}'</strong> sera deletado!</i>
            </div>
          </div>
        </div>        
        <button className="btn btn-primary btn-block" onClick={ApagaProduto}>Apaga</button>
      </div>
    </>
  );
};

export default Modal2;
