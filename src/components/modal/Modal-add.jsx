import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './modal.css';
import ImageUploading from 'react-images-uploading';
import { api } from '../../config/api';

const ModalAdd = () => {
  const [values, setValues] = useState([]);
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChangeImg = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const history = useHistory();

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };

  function onSubmit(ev) {
    ev.preventDefault();

    console.log(values)

    api.post("/user/", values)
    .then((res) => {
        alert('O usuário foi Criado com sucesso', res);

        history.push('/users');
        window.location.reload()
      })
      .catch((erro) => {
        alert(
          `Houve um erro ao tenta criar esse usuário, erro relacionado a ${erro}`
        );

        //localStorage.clear();
        history.push('/');
        window.location.reload();
      });
  }

  return (
    <>
    <div >
            <ImageUploading
              multiple
              value={images}
              onChange={onChangeImg}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="container col-md-3 mt-5">
                  <button
                    className='btn btn-primary p-3 h5'
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  <button className='btn btn-danger p-3 h5' onClick={onImageRemoveAll}>Remove all images</button>
                  {imageList.map((image, index) => (
                    <div>
                      <div key={index} className="container col-md-12">
                        <img src={image['data_url']} alt="" width="300" />
                      </div>
                      <div className="container col-7 mt-2">
                        <button onClick={() => onImageUpdate(index)}>Update</button>
                        <button onClick={() => onImageRemove(index)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
      <form onSubmit={onSubmit}>
      <div className="form-group input-group">
          <img src={values.image} alt="img" style={{width: 50}} />
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">URL img</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="image"
            name="image"
            value={values.image}
            onChange={onChange}
          />
        </div>
      <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Nome</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">E-mail</i>
            </div>
          </div>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Password</i>
            </div>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Phone</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Estado</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="state"
            name="state"
            value={values.state}
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
            type="bairro"
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
              <i className=" p-1 text-info">Cidade</i>
            </div>
          </div>
          <input
            type="bairro"
            className="form-control"
            placeholder="city"
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
            placeholder="district"
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
            className="form-coentrol border border-0"
            placeholder="street"
            name="street"
            value={values.street}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="p-1 text-info">Logradouro</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="apartment_or_house"
            name="apartment_or_house"
            value={values.apartment_or_house}
            onChange={onChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="fp-1 text-info">Número</i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="number"
            min="0"
            name="number1"
            value={values.number1}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value={'Salvar'}
          className="btn btn-primary btn-block"
        />
      </form>
    </>
  );
};

export default ModalAdd;
