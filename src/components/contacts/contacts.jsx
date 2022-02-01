import * as React from 'react';
import './contacts.css';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VkIcon from './Vk-icon.svg';

const onMouseOver = event => {
    const el = event.target;
    el.style.color = "#61DAFB";
};

const onMouseOut = event => {
    const el = event.target;
    let standart = "#ffffff";
    el.style.color = standart;
};



export default function Contacts() {
    return(
        <div id="contacts" className='contacts-box'>
            <div className='contacts-text'>
                Контакты:
            </div>
            <div className='contacts-box'> 
                <ul className='contacts-ul'>
                    <li className='contact-ul__li'>
                        <div className='contact-ul__logo-box'> 
                            <PhoneIcon sx={{ color: "#61DAFB", fontSize: 60 }} />
                        </div>
                        <div>                  
                            <Link href="tel:+79885851934" className="contacts-link" underline="hover"
                            onMouseEnter={event => onMouseOver(event)}
                            onMouseOut={event => onMouseOut(event)} >
                                +7 (988) 585-19-34 
                            </Link>
                        </div>  
                    </li>
                    <li>
                        <div className='contact-ul__logo-box'>
                            <EmailIcon sx={{ color: "#61DAFB", fontSize: 60 }} />
                        </div>
                        <Link href="mailto:alifanov7@yandex.ru" className="contacts-link" underline="hover"
                        onMouseEnter={event => onMouseOver(event)}
                        onMouseOut={event => onMouseOut(event)} >
                            alifanov7@yandex.ru
                        </Link>
                    </li>
                    <li>
                        <div className='contact-ul__logo-box'>
                            <img href="mailto:alifanov7@yandex.ru" src={VkIcon} color="#61DAFB" alt="logo" height={60} fill={"#61DAFB"} ></img>  
                        </div>
                        <Link href="https://vk.com/alifanovvv" className="contacts-link" underline="hover"
                            onMouseEnter={event => onMouseOver(event)}
                            onMouseOut={event => onMouseOut(event)} >
                            vk.com/Alifanovvv
                        </Link>
                            
                    </li>
                </ul>
            </div>
        </div>
    )
}
