import React, { useState } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'

import './Login.css'
import MovieDashboard from './MovieDashboard'

const Login = (props) => {
    const {handleAuth, userLoggedIn}=props;
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [nameValidate, setNameValidate] = useState(false);
    const [pwdValidate, setPwdValidate] = useState(false);

    const key='7a80e1e9';

    const handleHomeRedirect = () => {
        props.history.push('/dashboard');
        // <Redirect to="/dashboard"/>
        handleAuth();

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {};

        //email validation
        if (name==='admin') {
            formData.name= name;
            setNameValidate(false)
        } else {
            setNameValidate(true)
        }

        //password validation
        if (password==='admin') {
            formData.password = password;
            setPwdValidate(false);
        } else {
            setPwdValidate(true);
        }

       
        console.log(formData);
       
        if (formData.hasOwnProperty('name') && formData.hasOwnProperty('password') ) {
            localStorage.setItem('key',key);
            handleHomeRedirect(); 
        }
    }



    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    return (
        <div className="container shadow-lg p-5 mt-5 ">
            <div className="row ">
                <div className="col-md-10 mx-5 text-center ">
                    <div className="mx-4">
                        <h2 className="mx-2 mb-4">Login to your account</h2>
                        <form onSubmit={handleSubmit} className="">

                            <div className="mb-3 mx-2">
                                <input type="text" className="form-control mx-auto " style={{ width: '25%', border: nameValidate ? '1px solid red' : '' }}
                                    name="name"
                                    value={name}
                                    onChange={handleChange} placeholder="Enter username" />
                                {nameValidate && <div className="form-text" style={{ color: 'red' }}>Please enter the valid name</div>}
                            </div>

                            <div className="mb-3 mx-2">
                                <input type="password" name="password"
                                    value={password}
                                    onChange={handleChange} className="form-control mx-auto" style={{ width: '25%', border: pwdValidate ? '1px solid red' : '' }} id="exampleInputPassword1" placeholder="Enter password" />
                                {pwdValidate && <div className="form-text" style={{ color: 'red' }}>Please enter the valid password</div>}
                            </div>
                            <input type="submit" value="Login" className="btn btn-success mx-2" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="row mt-5 ">
                <div className="col-5 offset-3 text-center text-white justify-content-center">

                    <div className="card text-center">
                        <div className="card-header bg-dark text-white h3">Login Credentials</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">Username : admin </h5>
                            <h5 className="card-title">Password : admin </h5>
                            <p className="card-text ">
                                Please  enter above credentials to explore the application
                            </p>
                            
                        </div>
                        <div className="card-footer bg-dark text-dark">I</div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path='/dashboard' component={MovieDashboard} exact strict />
            </Switch>
        </div>
    )
}

export default Login
