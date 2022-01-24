import * as React from 'react';
import './contacts.css';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

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
        <div className='contacts-box'>
            <div className='contacts-text'>
                Контакты:
            </div>
            <div className='contacts-box'> 
                <ul className='contacts-ul'>
                    <li className='contact-ul__li'>
                        <div className='contact-ul__logo-box'> 
                            <PhoneIcon sx={{ color: "#61DAFB", fontSize: 80 }} />
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
                            <EmailIcon sx={{ color: "#61DAFB", fontSize: 80 }} />
                        </div>
                        <Link href="mailto:alifanovjob@gmail.com" className="contacts-link" underline="hover"
                        onMouseEnter={event => onMouseOver(event)}
                        onMouseOut={event => onMouseOut(event)} >
                            alifanovjob@gmail.com
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
