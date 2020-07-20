import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './landingpage.css';
import ReactDOM from 'react-dom';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
	
const Landingpage = () => {
  
  function update()
  {
  
    var content = document.getElementById("input3").value ;
    console.log(content)
    
  
  }
   let text2 = "erg"
    return (
      
       <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="http://localhost:3000/mainview">Logout</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">profile <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mypost</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Create post</a>
            </li>
          </ul>
         
        </div>
        </nav>  
        <div className="container">
        <div className="row" >
          <div className="col-4">
          <nav className="navbar navbar-light bg-light">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
          </div>
          
          <div className="col-8">
          <form>
  <div id ="div1" class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">write something..</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="input3" placeholder="Whats on your mind?"></input>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10 offset-sm-2">
      <button type="submit" class="btn btn-primary" onClick={update}>Post</button>
    </div>
  </div>
</form>
    <h4 className="display-5" id ="label1">{text2}</h4>
          </div>
        </div>
      </div>
        </div>
      

    
    
     
      );
   

};

export default Landingpage;

