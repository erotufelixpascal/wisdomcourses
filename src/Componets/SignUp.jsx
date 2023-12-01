import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Link } from "react-router-dom";
import axios from 'axios';


function Signup() {
    const [values, setValues] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:''
    })
    const handleUser =(event) =>{
        event.preventDefault();
        axios.post('http://localhost:3000/users')

    }
    return ( 
        <div class="back">
        <div class="div-center">
        <div class="content">
            <form onSubmit={handleUser}>
                <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" class="form-control"  placeholder="First Name" />
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" />
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
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