import * as React from 'react';
import './about-me-animals.css';
import PhotoAnimals1 from './Photo/Photo1.jpg';
import PhotoAnimals2 from './Photo/Photo2.jpg';
import PhotoAnimals3 from './Photo/Photo3.jpg';

export default function AboutMeAnimals() {
    return(
        <div className='about-me-animal__box'>
            <div className='about-me-animal__photo-box_animal'>
                <div className='about-me-animal__photo_animal1'>
                    <input type="image" img='true' className='photo' src={PhotoAnimals1} alt="photo1"></input>
                </div>
                <section className='about-me-animal__text'>
                    Я так же сожительствую с тремя четверногими бандитами - Это Шелби, ему 6 месяцев и он отвечает за Шум!!!
                </section>
            </div>
            <div className='about-me-animal__photo-box_animal'>
                <div className='about-me-animal__photo_animal2'>
                    <input type="image" img='true' className='photo' src={PhotoAnimals2} alt="photo2"></input>
                </div>
                <section className='about-me-animal__text'>
                    Это Киса, ей 3 года и ее любимый трек "Устрой Дестрой"!!!
                </section>
            </div>
            <div className='about-me-animal__photo-box_animal'>
                <section className='about-me-animal__text'>
                    Это Сэм, ему уже 6 лет и он помогает мне кодить!!!
                </section>
                <div className='about-me-animal__photo_animal3'>
                    <input type="image" img='true' className='photo' src={PhotoAnimals3} alt="photo3"></input>
                </div>
            </div> 
        </div>
    )
}