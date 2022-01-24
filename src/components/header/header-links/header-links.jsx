import * as React from 'react';
import Link from '@mui/material/Link';
import './header-links.css'




const onMouseOver = event => {
    const el = event.target;
    let colorhex = [
      "#7AF377",
      "#3498DB",
      "#F1C530",
      "#F29C29",
      "#8E44AD",
      "#4AA086",
      "#E74C3C",
      "#65CC71",
      "#D3541B",
      "#EB4367",
      "#74F7D9",
      "#DDA8FC"
    ];
    el.style.color = colorhex[Math.floor(Math.random() * 12)]
};

const onMouseOut = event => {
    const el = event.target;
    let standart = "#ffffff";
    el.style.color = standart;
};


const HeaderLinksText = {
    one: "< Резюме >",
    two: "< Git >",
    three: "< Обо мне>",
    four: "< Контакты >",   
}



export default function HeaderLinks() {
    return(
        <div className='nav-ul__box'>
            <nav>
                <ul className='nav-ul'>
                    <li className='nav-ul__li_position'> 
                        <Link href="#" className="nav-ul__Link" underline="hover" 
                        onMouseEnter={event => onMouseOver(event)}
                        onMouseOut={event => onMouseOut(event)}>
                        {HeaderLinksText.one}
                        </Link> </li>

                    <li className='nav-ul__li_position'> <Link href="#" className="nav-ul__Link" underline="hover"
                        onMouseEnter={event => onMouseOver(event)}
                        onMouseOut={event => onMouseOut(event)}>
                        {HeaderLinksText.two}
                        </Link> </li>

                    <li className='nav-ul__li_position'> <Link href="#" className="nav-ul__Link" underline="hover"
                        onMouseEnter={event => onMouseOver(event)}
                        onMouseOut={event => onMouseOut(event)}>
                        {HeaderLinksText.three}</Link> </li>

                    <li className='nav-ul__li_position'> <Link href="#" className="nav-ul__Link" underline="hover"
                        onMouseEnter={event => onMouseOver(event)}
                        onMouseOut={event => onMouseOut(event)}>
                        {HeaderLinksText.four}</Link> </li>
                </ul>
            </nav>
        </div>
    );
}