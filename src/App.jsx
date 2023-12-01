import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Componets/Login';
import Home from './Componets/Home';
import Signup from './Componets/SignUp';
import Course from './Pages/Admin/Course';
import CourseSurvey from './Pages/User/CourseSurvey';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login />}></Route>
        <Route path='/home' element ={<Home />}></Route>
        <Route path='/signup' element ={<Signup />}></Route>
        <Route path='/course' element ={<Course />}></Route>
        <Route path='/coursesurvey' element ={<CourseSurvey/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
