import React, { useEffect, useState } from 'react';
import './cadastro.css';
import ModalView from '../modal/Modal-view';
import ModalDel from '../modal/Modal-delete_user'
import ModalUpdate from '../modal/Modal-update';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import ModalAdd from '../modal/Modal-add';

export default function Cadastro({ users }) {
  const [pega, setPega] = useState('');
  const [idAtual, setIdAtual] = useState('');
  const [values, setValues] = useState('');
  localStorage.clear();

  useEffect(() => {
    if (idAtual) {
      axios
        .get(`http://3.208.50.76:3004/users/${idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [idAtual]);

  console.log(users)

  return (
    <div className='container'>
      <div>
        <Skeleton height={28} width={300} />
      </div>
      <div className="jumbotron jumbotron-fuid bg-img mt-2"></div>

      <div className="row">
        <h6 className="mx-auto text-dark ">
          Caso o Usuário Cadastrado não esteja aparecendo aperte F5
        </h6>
        <div className="col-md-12 container">
          <h2 className="titolo mx-auto text-dark">Lista de Usuários</h2>
          <table class="table">
            <thead>
              <tr className="text-dark">
                <th scope="col">
                  <i className="fas fa-coins" />
                </th>
                <th scope="col mrg">Imagem</th>
                <th scope="col mrg">Usuario</th>
                <th scope="col mrg">E-mail</th>
                <th scope="col mrg">Phone</th>
                <th scope="col mrg">
                  <Link
                      class="btn btn-outline-info"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="mr-2"
                    >
                      <i className="fas fa-user-plus mt-2 p-2 text-info btn btn-light card" />
                    </Link>

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
                              Cadastre um Usuario aqui
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              className="btn-outline-danger"
                            >
                              x
                            </button>
                          </div>
                          <div class="modal-body text-dark">
                            <ModalAdd />
                          </div>
                        </div>
                      </div>
                    </div>
                </th>
                <th scope="col mrg">
                </th>
              </tr>
            </thead>

            {users.map((r) => (
              <tbody key={r.id}>
                <tr className="btn-outline-warning rounded text-dark">
                  <th scope="row">
                    <button
                      type="button"
                      class="btn btn-outline-info"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                      onClick={() => {
                        setPega(r);
                      }}
                    >
                      <i className="fas fa-eye" />
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal2"
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
                              className="btn-outline-danger"
                            >
                              x
                            </button>
                          </div>
                          <div class="modal-body text-dark">
                            <ModalView dados={pega} />
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
                    <img src={r.image} alt="img" style={{width: 30}} />
                  </td>
                  <td>
                    {r.name}
                  </td>
                  <td>{r.email}</td>
                  <td>{r.phone}</td>
                  <td>
                    
                    <Link
                      class="btn btn-outline-info"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setIdAtual(r.id);
                      }}
                      className="mr-2"
                    >
                      <i className="fa-solid fa-plus mt-2 p-2 text-info btn btn-light card" />
                    </Link>

                    <div
                      class="modal fade"
                      id="exampleModal3"
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
                              Atualize o Usuário {values.name}
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              className="btn-outline-danger"
                            >
                              x
                            </button>
                          </div>
                          <div class="modal-body text-dark">
                            <ModalUpdate {...{ idAtual, users }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      class="btn btn-outline-info"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                      onClick={() => {
                        setIdAtual(r.id);
                      }}
                      className="mr-2"
                    >
                      <i className="fas fa-edit mt-2 p-2 text-info btn btn-light card" />
                    </Link>

                    <div
                      class="modal fade"
                      id="exampleModal4"
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
                              Atualize o Usuário {values.name}
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              className="btn-outline-danger"
                            >
                              x
                            </button>
                          </div>
                          <div class="modal-body text-dark">
                            <ModalDel {...{ idAtual, users }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      class="btn btn-outline-info"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal4"
                      onClick={() => {
                        setIdAtual(r.id);
                      }}
                      className="mr-2"
                    >
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
