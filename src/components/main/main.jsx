import * as React from 'react';
import './main.css';
import Photo from './main-photo.jpg';
import BackGroundImg from './main-background-img.jpg'
import HrLine from './main-hr/main-hr'


export default function Main(){
    return(
        <div className='main' style={{ backgroundImage: "url(" + BackGroundImg +")" }}>
            <div className='main__Photo-box unselectable'>
                <input type="image" img='true' className='main__Photo' src={Photo} alt="photo"></input>          
            </div>
            <div >
                <div className='main__profession'>Junior frontend developer
                    <HrLine color='#fff' width={500}/>
                </div>
                <div className='main__stack'> HTML/CSS | JavaScript | React | React Router | Redux | NodeJS | Material ui | Bootstrap | Webpack | SQL | Git 
                </div>
            </div>
        </div>
    )
}