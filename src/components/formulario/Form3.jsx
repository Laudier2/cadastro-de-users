import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { api } from '../../api';
//import axios from 'axios';

const Form3 = () => {
  const [name, setLocal1] = useState('');
  const [password, setLocal2] = useState('');
  const [email, setLocal3] = useState('');
  const [phone, setLocal4] = useState('');
  const [cep, setLocal5] = useState('');
  const [city, setLocal6] = useState('');
  const [district, setLocal7] = useState('');
  const [apartment_or_house, setLocal9] = useState('');
  const [state, setLocal13] = useState('');
  const [number1, setLocal14] = useState('');
  const [street, setLocal15] = useState('');
  const [image, setLocal16] = useState('');
  const [data, setData] = useState('');
  //const [user2, setUser] = useState('');

  //console.clear();

  useEffect(() => {
    const LocalName = async () => {
      const req = await localStorage.getItem('name');
      const res = await JSON.parse(req);
      setLocal1(res === undefined ? '' : res);
    };
    LocalName();

    const LocalSobrenome = async () => {
      const req = await localStorage.getItem('password');
      const res = await JSON.parse(req);
      setLocal2(res);
    };
    LocalSobrenome();

    const LocalEmail = async () => {
      const req = await localStorage.getItem('email');
      const res = await JSON.parse(req);
      setLocal3(res);
    };
    LocalEmail();

    const LocalTelefone = async () => {
      const req = await localStorage.getItem('phone');
      const res = await JSON.parse(req);
      setLocal4(res);
    };
    LocalTelefone();

    const LocalCep = async () => {
      const req = await localStorage.getItem('cep');
      const res = await JSON.parse(req);
      setLocal5(res);
    };
    LocalCep();

    const LocalCity = async () => {
      const req = await localStorage.getItem('city');
      const res = await JSON.parse(req);
      setLocal6(res);
    };
    LocalCity();

    const LocalBairro = async () => {
      const req = await localStorage.getItem('district');
      const res = await JSON.parse(req);
      setLocal7(res);
    };
    LocalBairro();

    const Localcasa = async () => {
      const req = await localStorage.getItem('apartment_or_house');
      const res = await JSON.parse(req);
      setLocal9(res);
    };
    Localcasa();

    const LocalUf = async () => {
      const req = await localStorage.getItem('state');
      const res = await JSON.parse(req);
      setLocal13(res);
    };
    LocalUf();

    const LocalNumero = async () => {
      const req = await localStorage.getItem('number1');
      const res = await JSON.parse(req);
      setLocal14(res);
    };
    LocalNumero();

    const LocalRua = async () => {
      const req = await localStorage.getItem('street');
      const res = await JSON.parse(req);
      setLocal15(res);
    };
    LocalRua();
    const LocalImg = async () => {
      const req = await localStorage.getItem('image');
      const res = await JSON.parse(req);
      setLocal16(res);
    };
    LocalImg();
  }, []);

  useEffect(() => {
    const result = {
      name,
      image,
      password,
      email,
      phone,
      cep,
      city,
      district,
      apartment_or_house,
      state,
      street,
      number1
    };

    setData(result);
  }, [
    name,
    image,
    password,
    email,
    phone,
    cep,
    city,
    district,
    apartment_or_house,
    state,
    street,
    number1
  ]);

  const history = useHistory();

  function onSubmit(ev) {
    ev.preventDefault();

    console.log(data)

    api
      .post("/user/", data)
      .then((res) => {
        alert('O usuário foi Criado com sucesso ', res);

        history.push('/users');
        window.location.reload()
      })
      .catch((erro) => {
        alert(
          `Houve um erro ao tenta criar esse usuário, erro relacionado ao ${erro}`);

        history.push('/');
        //window.location.reload();
      });
  }

  return (
    <>
      <div className="container col-md-8">
        <form onSubmit={onSubmit}>
          <h4
            className="mx-auto text-white mb-3 titolo text-dark"
            style={{ width: 330, marginTop: 50 }}
          >
            Confira os dados abaixo
          </h4>
          <Link to="/form2" className="btn btn-info">
          <i class="fa-solid fa-arrow-left"></i>
          </Link>
          <hr className='h1' />
          <div className="form-group input-group">       
            <p className='p-2'><img src={image} alt="img" style={{width: 100, marginRight: 5}} /> | </p>
            <p className='p-2'><strong>Nome:  </strong>{name} | </p>
            <p className='p-2'><strong>Email:  </strong>{email} |</p>
            <p className='p-2'><strong>Senha:  </strong>{password} |</p>
            <p className='p-2'><strong>Telefone:  </strong>{phone} |</p>
            <p className='p-2'><strong>Estado:  </strong>{state} |</p>
            <p className='p-2'><strong>Cidade:  </strong>{city} |</p>
            <p className='p-2'><strong>Bairro:  </strong>{district} |</p>
            <p className='p-2'><strong>Rua:  </strong>{street} |</p>
            <p className='p-2'><strong>Casa:  </strong>{apartment_or_house} |</p>
            <p className='p-2'><strong>Numero:  </strong>{number1} |</p>
          </div>
          <button type="submit" className="btn btn-success btn-block">
            Salva
          </button>
          
        </form>
      </div>
    </>
  );
};

export default Form3;
