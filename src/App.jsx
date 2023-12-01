import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Componets/Login';
import Home from './Componets/Home';
import Signup from './Componets/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login />}></Route>
        <Route path='/home' element ={<Home />}></Route>
        <Route path='/signup' element ={<Signup />}>Login</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
