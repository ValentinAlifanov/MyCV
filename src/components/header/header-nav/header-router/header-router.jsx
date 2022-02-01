import * as React from 'react';
import './header-router.css';
import { Link } from "react-scroll";

const onMouseIn = event => {
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

export default function HeaderRouter(props) {
    return(
            <li>
                <Link 
                    to={props.to} 
                    className='router_no-activ' 
                    activeClass='router_activ'
                    spy={true}
                    smooth={true}
                    offset={-1200}
                    duration={500}
                    
                    onMouseEnter={event => onMouseIn(event)} 
                    onMouseOut={event => onMouseOut(event)}>

                    {props.children}
                </Link>
            </li>
    )
}