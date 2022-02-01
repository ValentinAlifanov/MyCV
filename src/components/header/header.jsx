import * as React from 'react';
import './header.css';
import HeaderNav from './header-nav/header-nav';
import HeaderLogo from './header-logo/header-logo';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {  
    document.getElementById("header").style.height = "80px";
  } else {
    document.getElementById("header").style.height = "150px";
  }
};

const headerText = {
  text: "CV - Валентин Алифанов",
};

const headerLinks = {
  hh:{
    text:'Резюме',
    href:'https://rostov.hh.ru/resume/2a37a4e5ff099425a60039ed1f447259454848',
},
  git:{
    text:'Git',
    href:'https://github.com/ValentinAlifanov',
  },
  aboutMe: {
    text: 'Обо мне',
    to: 'about-me'},
  contacts: {
    text: 'Контакты',
    to: 'contacts'}
}



export default function Header() {
    return (
            <header id='header' className='unselectable'>
                <HeaderLogo text={headerText.text}/>
                <HeaderNav headerData={headerLinks}/>
            </header>
    );
}


