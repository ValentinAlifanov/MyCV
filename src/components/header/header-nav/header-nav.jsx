import * as React from 'react';
import './header-nav.css'
import HeaderLink from './header-link/header-link'
import HeaderRouter from './header-router/header-router';






export default function HeaderLinks(props) {
    return(
            <nav className='nav-ul__box'>
                <h2 className=''>
                    <ul className='nav-ul' > 
                        <HeaderLink link={props.headerData.hh.href}>{props.headerData.hh.text}</HeaderLink>                       
                        <HeaderLink link={props.headerData.git.href}>{props.headerData.git.text}</HeaderLink>
                        <HeaderRouter to={props.headerData.aboutMe.to}>{props.headerData.aboutMe.text}</HeaderRouter>
                        <HeaderRouter to={props.headerData.contacts.to}>{props.headerData.contacts.text}</HeaderRouter>
                    </ul>
                </h2>
            </nav>
    );
}