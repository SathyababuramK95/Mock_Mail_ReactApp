import React, { useState, useEffect } from 'react';
import './signup.css'
import Logo from '../../assets/logo.png'
import Logo_1 from '../../assets/logo_2.svg'
import { ROUTEPATH } from '../../common/appConstants'



function SignUp(props){

    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function inputChange(value, type) {
        if (type == 'username') {
            setUserName(value)
        } else if(type == 'firstname') {
            setPassword(value)
        }else if(type == 'lastname') {
            setPassword(value)
        }else if(type == 'password') {
            setPassword(value)
        } else if(type == 'confirmpassword') {
            setConfirmPassword(value)
        }
    }

    function registerUser(){
        if(!userName || !firstName || !lastName || !password){
            alert("All fields must be entered");
        }
        if((password).toString() === (confirmPassword).toString()){
            alert("password does not match with the confirm password entered")
        }
        userName = userName + "@mail.com"

        

    }

    function goToLogin() {
        props.history.push(ROUTEPATH.LOGIN);
    }
    return (
        <div className="mainLayout container justify-content-center align-items-center">
            <div className="col-md-9">
                <div className="row  signUpLayout">
                    <div className="col-md-7">
                        <div className="">
                            <div>
                                <img className="logoImage" src={Logo}></img>
                            </div>
                            <div className="highlitedText">
                                <h4>Create your mail account</h4>
                                <h6>to continue to your mail</h6>
                            </div>
                            <div className="form-inline">
                                <div className="form-group">
                                    <input type="text" value={firstName} onChange={(e) => inputChange(e.target.value, 'firstname')} className="form-control" placeholder="First name" />
                                </div>
                                <div className="form-group p-1">
                                    <input type="text" value={lastName} onChange={(e) => inputChange(e.target.value, 'lastname')} className="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <div className="usernameDiv">
                                    <div className="form-group input-group">
                                        <input type="text" className="form-control" value={userName} onChange={(e) => inputChange(e.target.value, 'username')} placeholder="Username" />
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@mail.com</div>
                                        </div>
                                </div>
                                <p className="usrnameInstruction">You can use letters, numbers and periods</p>
                            </div>
                            <div className="form-inline">
                                <div className="form-group">
                                    <input type="password" value={password} onChange={(e) => inputChange(e.target.value, 'password')} className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group p-1">
                                    <input type="password" value={confirmPassword} onChange={(e) => inputChange(e.target.value, 'confirmpassword')} className="form-control" placeholder="Confirm" />
                                </div>
                            </div>
                            <div className="lastDiv">
                                <div class="d-flex justify-content-around">
                                    <div>
                                        <h6 className="createAccText"><a onClick={() => goToLogin()}>Sign in instead</a></h6>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-primary" onClick={() => registerUser()}>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 sideLogo">
                        <img src={Logo_1}></img>
                        <p>One account. All of Google</p>
                        <p>Working for you</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUp;