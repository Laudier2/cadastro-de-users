import React, { useState } from 'react';
import './cadastro.css';
import Modal from '../modal/Modal';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Cadastro({ users }) {
  const [pega, setPega] = useState('');
  const [idAtual, setIdAtual] = useState('');

  localStorage.clear();
  const history = useHistory();

  const ts = (
    <i className="fas fa-trash-alt mt-2 p-2 text-danger btn btn-light card" />
  );

  const ApagaProduto = (id) => {
    axios //Esse process.env.REACT_APP_API_URL é uma variave de ambiente que contem a url da api
      .delete(process.env.REACT_APP_API_URL + id)
      .then((res) => {
        alert('O Usuário foi deletado com sucesso ' + ts);
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
    <div>
      <div className="jumbotron jumbotron-fuid bg-img mt-2"></div>

      <div className="row">
        <h6 className="mx-auto text-dark ">
          Caso o Usuário Cadastrado não esteja aparecendo aperte F5
        </h6>
        <div className="col-md-12">
          <h2 className="titolo mx-auto text-dark">Lista de Usuários</h2>
          <table class="table">
            <thead>
              <tr className="text-dark">
                <th scope="col">
                  <i className="fas fa-coins" />
                </th>
                <th scope="col">Usuario</th>
                <th scope="col">E-mail</th>
              </tr>
            </thead>

            {users.map((r) => (
              <tbody key={r.id}>
                <tr className="btn-outline-secondary text-dark">
                  <th scope="row">
                    <button
                      type="button"
                      class="btn btn-outline-info"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setPega(r);
                      }}
                    >
                      <i className="fas fa-eye" />
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="modal-title titolo2"
                              id="exampleModalLabel"
                            >
                              Dados do Usuário
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              className="btn-outline-secondary"
                            ></button>
                          </div>
                          <div class="modal-body text-dark">
                            <Modal dados={pega} />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-outline-secondary btn-block "
                              data-bs-dismiss="modal"
                            >
                              Fecha
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>
                    {r.name} {r.sobrenome}
                  </td>
                  <td>{r.email}</td>
                  <td>
                    <Link
                      to="/users"
                      onClick={() => {
                        setIdAtual(r._id);
                      }}
                      className="mr-2"
                    >
                      <i className="fas fa-edit mt-2 p-2 text-info btn btn-light card" />
                    </Link>
                    <Link to="/users" onClick={() => ApagaProduto(r._id)}>
                      <i className="fas fa-trash-alt mt-2 p-2 text-danger btn btn-light card" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
