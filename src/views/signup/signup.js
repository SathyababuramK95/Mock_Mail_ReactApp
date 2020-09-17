import React, { useState, useEffect } from 'react';
import './signup.css'
import Logo from '../../assets/logo.png'
import Logo_1 from '../../assets/logo_2.svg'
import { ROUTEPATH } from '../../common/appConstants'



function SignUp(props){


    function goToLogin() {
        props.history.push(ROUTEPATH.LOGIN);
    }
    return (
        <div className="col-md-12">
            <div className="container">
                <div className="row  signUpLayout justify-content-center align-items-center">
                    <div className="col-md-8">
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
                                        <input type="text" className="form-control"  placeholder="First name"/>
                                    </div>
                                    <div className="form-group p-1">
                                        <input type="text" className="form-control" placeholder="Last name"/>
                                    </div>
                                </div>
                                <div className="usernameDiv">
                                    <div className="form-group input-group">
                                        <input type="text" className="form-control" placeholder="Username"/>
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@mail.com</div>
                                        </div>
                                    </div>
                                    <p className="usrnameInstruction">You can use letters, numbers and periods</p>
                                </div>
                                <div className="form-inline">
                                    <div className="form-group">
                                        <input type="password" className="form-control"  placeholder="Password"/>
                                    </div>
                                    <div className="form-group p-1">
                                        <input type="password" className="form-control" placeholder="Confirm"/>
                                    </div>
                                </div>
                                <div className="lastDiv">
                                    <div class="d-flex justify-content-around">
                                        <div>
                                            <h6 className="createAccText"><a href="" onClick={() => goToLogin()}>Sign in instead</a></h6>
                                        </div>
                                        <div>
                                        <button type="button" className="btn btn-primary">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 sideLogo">
                        <img  src={Logo_1}></img>
                        <p>One account. All of Google</p>
                        <p>Working for you</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}


export default SignUp;