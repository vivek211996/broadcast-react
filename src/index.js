import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Homeview from './homeview.jsx'
import Register from './register.jsx'
import Mainp from './Mainpage.jsx'
import Landingpage from './landingpage.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import a from './App.js'

const Loginview = () =>  <App/>;
const Registerview = () =>  <Register/>;
const Homev = () =>  <Homeview/>;
const Mainview = () =>  <Mainp/>;
const Landingview = () =>  <Landingpage/>;


const Homepage = () => {
  
    return (
     
      <Router>
          
          <Switch>
          <Route path ="/mainview">
                  <Mainview/>
                
                   </Route>
              <Route path ="/registerview">
                  <Registerview/>
            
                   </Route>
                   <Route path ="/loginview">
                  <Loginview/>
                  
                   </Route>
                   <Route path ="/homeview">
                  <Homev/>
                  </Route>
                  <Route path ="/landingview">
                  <Landingview/>
                 </Route>
                   
          </Switch>
          <a id = "homebutton" href = "http://localhost:3000/mainview">Home</a>
        
      </Router>
      
      
    
  )
}





ReactDOM.render(
  <React.StrictMode>
   
    <Homepage/>
  </React.StrictMode>,
  document.getElementById('root')
);


