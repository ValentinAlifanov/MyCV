import * as React from 'react';
import './header-link.css'

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

export default function HeaderLink(props) {
    return (
        <li>
            <a className='text' href={props.link} onMouseEnter={event => onMouseIn(event)} onMouseOut={event => onMouseOut(event)}>{props.children}</a>    
        </li>
    )
}
