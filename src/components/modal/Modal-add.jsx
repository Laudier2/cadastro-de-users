import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './modal.css';
import ImageUploading from 'react-images-uploading';
import { api } from '../../config/api';
const ModalAdd = () => {
  const [values, setValues] = useState([]);
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const [image, setLocal16] = useState([]);

  const onChangeImg = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  //const ts = image.replace(image, "01.png")

  console.log(image)

  const LocalImg = async () => {
    const req = await localStorage.getItem('image');
    const res = await JSON.parse(req);
    return res
  }

  useEffect(() => {
    const LocalImg = async () => {
      const req = await localStorage.getItem('image');
      const res = await JSON.parse(req);
      setLocal16(res);
    };
    LocalImg();
  },[])

  const history = useHistory();

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };

  function onSubmit(ev) {
    ev.preventDefault();

    console.log(image)

    const res = {
      apartment_or_house: values.apartment_or_house,
      cep: values.cep,
      city: values.city,
      district: values.district,
      email: values.email,
      name: values.name,
      number1: values.number1,
      password: values.password,
      phone: values.phone,
      state: values.state,
      street: values.street,
      image: "image"
    }
    console.log(res)
    api.post("/user/", res)
    .then((res) => {
        alert('O usuário foi Criado com sucesso', res);

        //history.push('/users');
        //window.location.reload()
        //localStorage.clear()
      })
      .catch((erro) => {
        alert(
          `Houve um erro ao tenta criar esse usuário, Lembre que, o E-mail ñão pode ser um que já tenha cadastro, e a sua imagem tem que ser no formato (gif, jpg, ou png) se não for, o cadastro não sera realiozado ok, conrrija isso e tente novamente.`

        );

        //history.push('/users');
        //window.location.reload();
      });
  }

  const localCreateImg = (e) => {
    localStorage.setItem('image', JSON.stringify(e.data_url));

  };

  //console.log(image)

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
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="container col-md-12 mt-1 mb-5">
              {imageList.map((image, index) => (
                <div>
                  <div key={index} className="container col-md-9">
                    <img src={image['data_url']} alt="" width="300" className="rounded-circle" />
                  </div>
                </div>
              ))}
              {images <= "" ? <button
                className='btn btn-primary p-3 h5'
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                <i className="fa-solid fa-cloud-arrow-up"> Cloica aqui para carrega uma imagem</i>
                {/*<p>Ou se preferir insira uma url de uma imagem a baxo</p>*/}
              </button> : 
              imageList.map((image, index) => (
              <button 
                className='btn btn-outline-success text-dark mt-2' 
                style={{margin: "auto", display: "flex"}}
                onClick={() => localCreateImg(image)}>
                  Comfirma essa
              </button>
              ))}
              {images > "" ? <button 
                className='btn btn-warning mt-2' 
                style={{margin: "auto", display: "flex"}}
                onClick={onImageRemoveAll}>
                  Escolher Outra
              </button> : ""
              }
              &nbsp;
            </div>
          )}
        </ImageUploading>
      </div>
      <form onSubmit={onSubmit}>
      {/*<div className="form-group input-group">
          {/*<img src={values.image || image} alt="img" style={{width: 50}} />}

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
            value={image || values.image}
            onChange={onChange}
          />
            </div>*/}
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
