import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


function Signup() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        role:'',
        password:''
    })
    const handleUser =(event) =>{
        event.preventDefault();
        axios.post('http://localhost:3000/users/',values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));


    }
    return ( 
        <div class="back">
        <div class="div-center">
        <div class="content">
            <form onSubmit={handleUser}>
                <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" class='form-control' name='First Name' placeholder='First Name' 
                onChange = {e => setValues({...values, firstname: e.target.value})}/>
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" 
                onChange = {e => setValues({...values, lastname: e.target.value})}/>
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" 
                onChange = {e => setValues({...values, email: e.target.value})}/>
                </div>
                {/* <div class="form-group">
                <label for="exampleInputPassword1">Role</label>
                <input type="text" class="form-control" placeholder="Particpant or Supervisor" 
                onChange = {e => setValues({...values, role: e.target.value})}/>
                </div> */}
                <div class="form-group">
                    <label for="sel1">Select Role (select one):</label>
                    <select class="form-control" id="sel1" onChange = {e => setValues({...values, role: e.target.value})}>
                        <option>Participant</option>
                        <option>Supervisor</option>
                        <option>Instructor</option>
                        
                    </select>
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" 
                onChange = {e => setValues({...values, password: e.target.value})}/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <Link to='/' type="button" class="btn btn-primary ms-3">Back</Link>
                                
                
            </form>
        </div>
        </div>
        </div>
     );
}

export default Signup;