import { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import Nav from './components/nav/Nav';
import Form1 from './components/formulario/Form1';
import Form2 from './components/formulario/Form2';
import Form3 from './components/formulario/Form3';
import ListaDeClientes from './components/ListaClientes/ListaDeClientes'
import './style.css'
//import { api } from './api';
import axios from 'axios';


function App() {

  const [ users, setUsers ] = useState([])
  //const [ product, setProduct ] = useState([])

  //const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4MzdlMjIwLTg3OTUtNGZjNy04NDU0LTc2OGUzZDBjYWM1NiIsImlhdCI6MTY3Mzg4NTQ0NCwiZXhwIjoxNjczOTE0MjQ0fQ.iadX7-X1vxKJy1X6efAdFsNAS2PeRR3FHZ9SL0GTzVg"

  useEffect(() => {
    (async() => {
      /*axios.get('http://44.213.49.43:3004/user', {
        headers: {
          'Authorization': `token ${access_token}`
        }
      })*/
      const req = await axios.get(`${process.env.REACT_APP_API_URL}/user`)
      const res = await req.data

      setUsers(res)
      
    })()
  },[])

  return (
    <>
      <Nav />
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <Route exact path="/users" component={() => <ListaDeClientes users={users}/>} />
          <Route exact path="/" component={Form1} />
          <Route exact path="/form2" component={Form2} />
          <Route exact path="/form3" component={Form3} />
        </div>
      </div>
    </>
  );
}

export default App;
