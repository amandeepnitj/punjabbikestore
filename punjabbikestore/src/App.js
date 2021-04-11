import React from 'react';
import './App.css';
import Footer1 from './components/Footer1/Footer1';
import Navbar1 from './components/navbar/Navbar1';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Login_page from './components/Login_page/Login_page';
import Signup_page from './components/Signup_page/Signup_page';
import Motorcycles from './components/Motorcycles/Motorcycles';
import Scooters from './components/Scooters/Scooters';
import About from './components/about/About';
import { AuthProvider } from './contexts/AuthContext';
function App() {
  return (
    <>
    {/*<AuthProvider>*/}
      <Navbar1/>
      <Router>
     
         <Route exact path="/" component={Home} /> 
         <Route path="/login" component={Login_page} />
         <Route path="/signup" component={Signup_page} />
         <Route path="/motorcycles" component={Motorcycles} />
         <Route path="/scooters" component={Scooters} />  
         <Route path="/about" component={About} />  
     
      </Router>
      <Footer1/>
      {/*</AuthProvider>*/}
      </>
  );
}

export default App;
