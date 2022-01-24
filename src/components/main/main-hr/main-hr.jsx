import * as React from 'react';
import './main-hr.css';

export default function HrLine({color, width}){
    return(
        <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
            width: width,
        }}
        />
    )
}
