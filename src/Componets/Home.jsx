import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return ( 
        <div>
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">Wisdom Courses</a>
            </div>
            <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Relationships</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Sessions</a></li>
            </ul>
        </div>
        </nav>
        {/* <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JavaScript</a></li>
        </ul>
      </div> */}

      </div>
     );
}

export default Home;