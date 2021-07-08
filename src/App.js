import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Link,Switch, Route , withRouter, Redirect} from 'react-router-dom'

import './App.css';
import Navbar from './core-components/Navbar'

const App=(props)=> {
  const [userLoggedIn,setUserLoggedIn]=useState(false);

  const handleAuth=()=>{
    setUserLoggedIn(!userLoggedIn);
  }

  useEffect(()=>{
    if(localStorage.getItem('key')){
      handleAuth();
    }
  },[])

  return (
    <Router className="App">
      <Navbar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/>
      {userLoggedIn? (<Redirect to="/dashboard"/> ||<Redirect to="/dashboard/:imdbID"/> ):<Redirect to="/"/>}
    </Router>
  );
}

export default App;
