import React, { useEffect, useState } from 'react'
import Cadastro from './components/Cadastro/Cadastro'
import Axios from 'axios'
import { Route } from "react-router-dom";
import './style.css'
import Nav from './components/nav/Nav';
import Form1 from './components/formulario/Form1';
import Form2 from './components/formulario/Form2';
import Form3 from './components/formulario/Form3';

function App() {

  const [ users, setUsers ] = useState([])
  
 
  useEffect(() => {
    const GetReq = async () => {
      
      const req = await Axios.get(process.env.REACT_APP_API_URL)
      const res = await req.data;

      console.clear()
    
      setUsers(res)
    }

    GetReq()
  }, [])

  return (
    <>
      <Nav />
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <Route exact path="/users" component={() => <Cadastro users={users}/>} />
          <Route exact path="/" component={Form1} />
          <Route exact path="/form2" component={Form2} />
          <Route exact path="/form3" component={Form3} />
        </div>
      </div>
    </>
  );
}

export default App;
