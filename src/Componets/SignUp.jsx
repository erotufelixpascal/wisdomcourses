import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Link } from "react-router-dom";


function Signup() {
    return ( 
        <div class="back">
        <div class="div-center">
        <div class="content">
            <form>
                <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" class="form-control"  placeholder="First Name"></input>
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name"></input>
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></input>
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <Link to='/home' type="submit" class="btn btn-primary">Login</Link>
                <Link to='/' type="button" class="btn btn-primary ms-3">Back</Link>
                                
                
            </form>
        </div>
        </div>
        </div>
     );
}

export default Signup;