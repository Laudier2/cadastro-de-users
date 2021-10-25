import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Form3 = () => {
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
  const [data, setData] = useState([]);

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

  const localCreate = (e) => {
    localStorage.setItem('cpf', JSON.stringify(e.cpf));
    localStorage.setItem('nacimento', JSON.stringify(e.nacimento));
    localStorage.setItem('rendaMes', JSON.stringify(e.rendaMes));
  };

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

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setData({ ...data, [name]: value });
  };

  const history = useHistory();

  function onSubmit(ev) {
    ev.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}`;

    axios
      .post(url, data)
      .then((res) => {
        alert('O produto foi Criado com sucesso');

        history.push('/users');
      })
      .catch((erro) => {
        alert(
          'Houve um erro ao tenta criar esse usuario, erro relacionado a ' +
            erro
        );
        console.log(data);

        localStorage.clear();
        history.push('/form3');
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
            Preecha os campos abaixo
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
              placeholder="Data de Nacimento"
              name="nacimento"
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
              placeholder="CPF"
              name="cpf"
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
              placeholder="Reanda Mensal"
              name="rendaMes"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success btn-block"
            onClick={() => localCreate(data)}
          >
            Salva
          </button>
        </form>
      </div>
    </>
  );
};

export default Form3;
