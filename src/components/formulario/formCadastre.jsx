import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { mask, unMask } from 'remask';

export default function Form3() {
  const [name, setLocal1] = useState('');
  const [sobrenome, setLocal2] = useState('');
  const [email, setLocal3] = useState('');
  const [phone, setLocal4] = useState('');
  const [cep, setLocal5] = useState('');
  const [city, setLocal6] = useState('');
  const [bairro, setLocal7] = useState('');
  const [endereco2, setLocal8] = useState('');
  const [casa, setLocal9] = useState('');
  const [cpf, setLocal10] = useState('');
  const [nacimento, setLocal11] = useState('');
  const [rendaMes, setLocal12] = useState('');
  const [uf, setLocal13] = useState('');
  const [numero, setLocal14] = useState('');
  const [rua, setLocal15] = useState('');
  const [data, setData] = useState('');
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');

  console.clear();

  useEffect(() => {
    const LocalName = async () => {
      const req = await localStorage.getItem('name');
      const res = await JSON.parse(req);
      setLocal1(res);
    };
    LocalName();

    const LocalSobrenome = async () => {
      const req = await localStorage.getItem('sobrenome');
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
      const req = await localStorage.getItem('telefone');
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
      const req = await localStorage.getItem('bairro');
      const res = await JSON.parse(req);
      setLocal7(res);
    };
    LocalBairro();

    const LocalEndereco2 = async () => {
      const req = await localStorage.getItem('endereco2');
      const res = await JSON.parse(req);
      setLocal8(res);
    };
    LocalEndereco2();

    const Localcasa = async () => {
      const req = await localStorage.getItem('casa');
      const res = await JSON.parse(req);
      setLocal9(res);
    };
    Localcasa();
    const LocalNacimento = async () => {
      const req = await localStorage.getItem('cpf');
      const res = await JSON.parse(req);
      setLocal10(res);
    };
    LocalNacimento();

    const LocalCpf = async () => {
      const req = await localStorage.getItem('nacimento');
      const res = await JSON.parse(req);
      setLocal11(res);
    };
    LocalCpf();

    const LocalMes = async () => {
      const req = await localStorage.getItem('rendaMes');
      const res = await JSON.parse(req);
      setLocal12(res);
    };
    LocalMes();

    const LocalUf = async () => {
      const req = await localStorage.getItem('uf');
      const res = await JSON.parse(req);
      setLocal13(res);
    };
    LocalUf();

    const LocalNumero = async () => {
      const req = await localStorage.getItem('numero');
      const res = await JSON.parse(req);
      setLocal14(res);
    };
    LocalNumero();

    const LocalRua = async () => {
      const req = await localStorage.getItem('rua');
      const res = await JSON.parse(req);
      setLocal15(res);
    };
    LocalRua();
  }, []);

  useEffect(() => {
    const result = {
      name,
      sobrenome,
      email,
      phone,
      cep,
      city,
      bairro,
      endereco2,
      casa,
      uf,
      rua,
      numero,
      cpf,
      nacimento,
      rendaMes,
    };

    setData(result);
  }, [
    name,
    sobrenome,
    email,
    phone,
    cep,
    city,
    bairro,
    endereco2,
    casa,
    uf,
    rua,
    numero,
    cpf,
    nacimento,
    rendaMes,
  ]);

  const onChange1 = (ev) => {
    const Mascara1 = unMask(ev.target.value);
    const Mascara2 = mask(Mascara1, ['99/99/9999']);

    setData1(Mascara2);
    localStorage.setItem('nacimento', JSON.stringify(data1));
  };

  const history = useHistory();

  function onSubmit(ev) {
    ev.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}`;

    axios
      .post(url, data)
      .then((res) => {
        alert('O usuário foi Criado com sucesso');

        history.push('/users');
      })
      .catch((erro) => {
        alert(
          'Houve um erro ao tenta criar esse usuário, erro relacionado ao E-mail, tente novamente'
        );

        //localStorage.clear();
        history.push('/');
        //window.location.reload();
      });
  }

  return (
    <div>
      <div className="container col-md-8">
        <form onSubmit={onSubmit}>
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
      </div>
  );
)

