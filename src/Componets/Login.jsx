import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    return ( 
        <div class="back">
        <div class="div-center">
        <div class="content">
            <form>
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></input>
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <Link to='/home' type="submit" class="btn btn-primary">Login</Link>
                <hr />
                <Link to='/signup' type="button" class="btn btn-primary">Signup</Link>
                <button type="button" class="btn btn-primary ms-3">Reset Password</button>
            </form>
        </div>
        </div>
        </div>

        );
}

export default Login;