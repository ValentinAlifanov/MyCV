import * as React from 'react';
import './header.css';
import logo from './logo.svg';
import HeaderLinks from './header-links/header-links'

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {  
    document.getElementById("header").style.height = "80px";
  } else {
    document.getElementById("header").style.height = "150px";
  }
}

export default function Header() {
    return (
            <header id="header">
                <div className="Header-logo-box">
                    <img src={logo} className="Header-logo Header-logo-spin" alt="logo" />
                </div>
                <div>
                    <h1>
                        CV - Алифанов Валентин  
                    </h1>
                </div>
                <HeaderLinks />
            </header>
    );
}


