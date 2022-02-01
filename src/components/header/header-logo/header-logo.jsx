import * as React from 'react';
import './header-logo.css';
import Logo from './logo.svg'

export default function HeaderLogo (props) {
    return(
        <div className="Header-logo-box">
            <img src={Logo} className="Header-logo Header-logo-spin" alt="logo" />
            <h1 className='header-title'> {props.text} </h1>
        </div>
    )
};