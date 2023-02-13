import { useEffect, useState, Suspense, lazy } from 'react';
import { Route } from "react-router-dom";
import Nav from './components/nav/Nav';
import './style.css'
import { api } from './config/api';
const Form1 = lazy(() => import('./components/formulario/Form1'));
const Form2 = lazy(() => import('./components/formulario/Form2'));
const Form3 = lazy(() => import('./components/formulario/Form3'));
const ListaDeClientes = lazy(() => import('./components/ListaClientes/ListaDeClientes'));
//import Form1 from './components/formulario/Form1';
//import Form2 from './components/formulario/Form2';
//import Form3 from './components/formulario/Form3';
//import ListaDeClientes from './components/ListaClientes/ListaDeClientes'



function App() {

  const [ users, setUsers ] = useState([])
  
  useEffect(() => {
    (async() => {
     
      const req = await api.get()
      const res = await req.data

      setUsers(res)
      
    })()
  },[])

  return (
    <>
      <div container>
        <div className="col-xs-12">
          <Nav />
          <Suspense fallback={
            <h1 className="text-white loading">Loading...</h1>
          }>
            <Route exact path="/users" component={() => <ListaDeClientes users={users}/>} />
            <Route exact path="/" component={Form1} />
            <Route exact path="/form2" component={Form2} />
            <Route exact path="/form3" component={Form3} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
