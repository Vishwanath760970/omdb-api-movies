import React from 'react'
import { Link, Switch, Route, withRouter, Redirect } from 'react-router-dom'

import Login from './Login';
import MovieDashboard from './MovieDashboard'


const Navbar = (props) => {
    const { userLoggedIn, handleAuth } = props;
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navUl  ">
                    <div className="container-fluid ">
                        <div className="collapse navbar-collapse nav-ul navUl " id="navbarNavDropdown">
                            <ul className="navbar-nav ml-15 navUl">
                            {userLoggedIn ? (
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link active " style={{ color: '#f5f5f5', fontSize: '1.2rem' }} to="/dashboard">MovieDashboard</Link>
                                </li>
                                <li className="nav-text">
                                    <Link className="nav-link active" to="" onClick={() => {
                                        localStorage.removeItem('key');
                                        handleAuth();
                                        props.history.push('/');
                                    }}>Logout</Link>
                                </li>
                                </>
                                ):( <li className="nav-item">
                                    <Link className="nav-link active " style={{ color: '#f5f5f5', fontSize: '1.2rem' }} to="/">Login</Link>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </nav>
            
                
          
            <Switch>
                <Route path="/" exact strict  render={(props) => {
                    return <Login
                        {...props}//lec 33, need to pass this prop to get history object n push etc properties
                        handleAuth={handleAuth}
                        userLoggedIn={userLoggedIn}
                    />
                }} />
                <Route path="/dashboard" component={MovieDashboard} userLoggedIn={userLoggedIn} exact strict />
               
            </Switch>
        </div>
    )
}

export default withRouter(Navbar)
