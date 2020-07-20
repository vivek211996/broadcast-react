import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

	
const Homeview = () => {
 
  let text1 ="Hello, ";

return (
     <div>
         
        <div className="jumbotron">
    <h1 className="display-3">{text1}</h1>
      
      
        <p className="lead">Welcome to Broadcast, a social gathering and information platform
                        latest news,your friends,and various apps can be added.</p>
                        
        <p>tried by Vivekanandhan.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="http://localhost:3000/landingview" role="button">Take me there</a>
        </p>
      </div>
      
      </div>
     
   
  
      );
   

};


export default Homeview;