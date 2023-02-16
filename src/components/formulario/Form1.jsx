import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mask, unMask } from 'remask';
import ImageUploading from 'react-images-uploading';
import "./form.css"

localStorage.clear()

const Form1 = () => {
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChangeImg = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const hotmail = "@gmail.com"

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setData({ ...data, [name]: value });
  };

  const onChange1 = (ev) => {
    const Mascara1 = unMask(ev.target.value);
    const Mascara2 = mask(Mascara1, ['(99) 999999999']);

    setData2(Mascara2);
    console.log(Mascara2);
    localStorage.setItem('phone', JSON.stringify(data2));
  };

  const localCreate = (e) => {
    localStorage.setItem('name', JSON.stringify(e.name));
    localStorage.setItem('password', JSON.stringify(e.password));
    localStorage.setItem('email', JSON.stringify(e.email+hotmail));
  };

  const localCreateImg = (e) => {
    alert("A imagen foi selecionada com sucesso")
    localStorage.setItem('image', JSON.stringify(e.data_url));
  };

  return (
    <>
      <div className="container col-md-8 text-white">
      <div>
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
                <div className="container col-md-4 mt-5">
                  {imageList.map((image, index) => (
                    <div>
                      <div key={index} className="container col-md-12">
                        <img src={image['data_url']} alt="" width="300" />
                      </div>
                    </div>
                  ))}
                  {images <= "" ? <button
                    className='btn btn-primary p-3 h5'
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <i class="fa-solid fa-cloud-arrow-up">  Escolha uma imagem</i>
                  </button> : 
                  imageList.map((image, index) => (
                  <button 
                    className='btn btn-outline-success text-white mt-2' 
                    style={{margin: "auto", display: "flex"}}
                    onClick={() => localCreateImg(image)}>
                      Quero essa
                  </button>
                  ))
                  }
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
        <form>
          <h4
            className="mx-auto text-white mb-3 titolo text-white"
            style={{ width: 330, marginTop: 50 }}
          >
            Preecha os campos abaixo{' '}
            <Link to="/form2" className="btn btn-info mt-2" style={{ marginLeft: 250 }}>
          <i class="fa-solid fa-arrow-right"></i>
          </Link>
          </h4>
          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center p-2">
              <div className="input-group-text">
              <i class="fa-solid fa-user p-1 mt-2 text-info"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Nome Completo"
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center p-2">
              <div className="input-group-text">
              <i class="fa-solid fa-key p-1 mt-2 text-info"></i>
              </div>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              name="password"
              onChange={onChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center p-2">
              <div className="input-group-text">
                <i className="fas fa-envelope  p-1 mt-2 text-info" />
              </div>
            </div>
            <input
              type="email"
              className="form-control col-sm-8"
              placeholder="Nome para o email"
              name="email"
              onChange={onChange}
            />
            <div className="input-grou-prepend align-self-center">
              <div className="input-group-text">
                <h1>@hotmail.com</h1>
              </div>
            </div>
          </div>
          <div className="form-group input-group">
            <div className="input-grou-prepend align-self-center p-2">
              <div className="input-group-text">
              <i class="fa-solid fa-phone p-1 mt-2 text-info"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Telefone"
              name="phone"
              value={data2}
              onChange={onChange1}
            />
          </div>
          <Link
            to="/form2"
            className="btn btn-outline-info btn-block"
            onClick={() => localCreate(data)}
          >
            Proximo
          </Link>
        </form>
      </div>
    </>
  );
};

export default Form1;
