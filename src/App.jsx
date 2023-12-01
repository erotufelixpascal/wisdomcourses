import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Componets/Login';
import Home from './Componets/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element ={<Login />}></Route>
        <Route path='/' element ={<Home />}></Route>
        {/* <Route path='/login' element ={<Login />}>Login</Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
