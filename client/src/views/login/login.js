import React, { useState, useEffect } from 'react';
import './login.css'
import Logo from '../../assets/logo.png'
import { ROUTEPATH } from '../../common/appConstants'
import { API_URL } from '../../common/appConstants'
import { httpPost } from '../../httpclient/httpClient'

function Login(props){


    function createAccount(){
        props.history.push(ROUTEPATH.SIGNUP);
    }

    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');

    function inputChange(value, type) {
        if (type == 'username') {
            setUserName(value)
        } else if(type == 'password') {
            setPassword(value)
        } 
    }

    async function processLogin() {

        if(!userName || !password){
            alert("Enter valid data");
            return;
        }

        let userData = await httpPost(API_URL.GETUSER,{username : userName,password : password});

        if(!userData){
            alert("Entered Detail does not match with any account");
            return;
        }

        if(userData){
            props.history.push({
                pathname : ROUTEPATH.DASHBOARD,
                state  : {userData : userData}
            });
        }

    }




    return (
        <div className="container">
            <div className="row justify-content-center align-items-center loginBox">
                <div className="col-md-5 LoginLayout">
                    <div className="container-fluid">
                        <div className="logoDiv">
                            <img className="logoImage" src={Logo}></img>
                        </div>
                        <h3 className="text-center">Sign In</h3>
                        <h6 className="text-center">to continue to your mail</h6>
                        <div className="form-content">
                            <div className="form-group">
                                <input type="text" onChange={(e) => inputChange(e.target.value, 'username')} className="form-control"  placeholder="Email or phone" />
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={(e) => inputChange(e.target.value, 'password')} className="form-control" placeholder="Enter password"/>
                            </div>
                            <div className="forgotDiv">
                                <h6 className="forgotPassLink"><a href="">Forgot password?</a></h6>
                            </div>
                            <div className="lastDiv">
                                <div class="d-flex justify-content-around">
                                    <div>
                                        <h6 className="createAccText"><a href="" onClick={() => createAccount()}>Create account</a></h6>
                                    </div>
                                    <div>
                                    <button type="button" className="btn btn-primary" onClick={() => processLogin()}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        
    )
}


export default Login;