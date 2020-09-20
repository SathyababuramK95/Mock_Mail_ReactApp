import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search-icon.png';


function Dashboard(props) {

    return(
        <div>
            <header>
                <div className="search">
                    <div>
                        <img className="logoImage" src={Logo} id="logo" />
                    </div>
                </div>
            </header>
            <div className="side col-md-2 justify-content-center align-items-center">
                <button className="btn btn-block btn-primary" id="compose-button">Compose</button>

                <div className="sideBarContent">
                    <p>Inbox</p>
                    <p>Starred</p>
                    <p>Important</p>
                    <p>Sent</p>
                </div>
            </div>
            <div id="content">
                
            </div>
        </div>
    )
    
}


export default Dashboard;