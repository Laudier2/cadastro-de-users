import React, { useEffect, useState } from 'react';
import './cadastro.css';
import ModalView from '../modal/Modal-view';
import ModalDel from '../modal/Modal-delete_user'
import ModalUpdate from '../modal/Modal-update';
import ModalAdress2 from '../modal/Modal-add-adress2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import ModalAdd from '../modal/Modal-add';

export default function Cadastro({ users }) {

  const [pega, setPega] = useState('');
  const [idAtual, setIdAtual] = useState('');
  const [values, setValues] = useState('');

  const reload = () => {
    window.location.reload()
  }

  useEffect(() => {
    if (idAtual) {
      axios
        .get(`${process.env.REACT_APP_API_URL}${idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [idAtual]);

  return (
    <>
      <div>
        <Skeleton height={28} width={300} />
      </div>
      <div className="jumbotron jumbotron-fuid bg-img mt-2"></div>

      <div className="container">
        <h6 className="mx-auto text-white ">
          Caso o Usuário Cadastrado não esteja clica no icone sircular abáisxo para atualiza a pagina!
        </h6>
       
        <div>
        <Link onClick={reload}>
          <i class="fa-sharp fa-solid fa-rotate p-2 text-info btn btn-light card" 
          style={{fontSize: 30}} />
        </Link>
          <h2 className="titolo mx-auto text-white">Lista de Usuários</h2>
          <table className="table">
           
            <thead>
              <tr className="text-white">
                <th scope="col">
                  <i className="fas fa-coins" />
                </th>
                <th scope="col mrg">Imagem</th>
                <th scope="col mrg">Usuario</th>
                <th scope="col mrg">E-mail</th>
                <th scope="col mrg">Phone</th>
                <th scope="col mrg">Estado</th>
                <th scope="col mrg">Cidade</th>
                <th scope="col mrg">
                
                  <Link to="/"
                      class="btn btn-outline-info"
                      className="mr-2"
                      >
                      {/*data-bs-toggle="modal"
                      data-bs-target="#exampleModal"*/}
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
                <tr className="btn-outline-secondary rounded text-white">
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
                  <td>{r.state}</td>
                  <td>{r.city}</td>
                  <td>
                    
                  {/*<Link
                    class="btn btn-outline-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalAd"
                    onClick={() => {
                      setIdAtual(r.id)
                    }}
                    className="mr-2"
                  >
                    <i className="fas fa-plus mt-2 p-2 text-info btn btn-light card" />
                  </Link>*/}

                    <div
                      class="modal fade"
                      id="exampleModalAd"
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
                              Cadastre o Segundo endereco aqui
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
                            <ModalAdress2 />
                          </div>
                        </div>
                      </div>
                    </div>

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
                        setIdAtual(r.id)
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
    </>
  );
}
