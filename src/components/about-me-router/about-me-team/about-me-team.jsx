import * as React from 'react';
import './about-me-team.css';
import PhotoTeam2 from './photo/Photo2.jpg';
import PhotoTeam4 from './photo/Photo4.jpg';
import PhotoTeam6 from './photo/Photo6.jpg';

export default function AboutMeTeam() {
    return(
        <div className=''>
            <div className='about-me-team__top-box'>
                <div className='photo-team_box1'>
                    <input type="image" img='true' className='photo' src={PhotoTeam2} alt="photo2"></input>
                </div>
                <div className='photo-team_box2'>
                    <input type="image" img='true' className='photo' src={PhotoTeam6} alt="photo2"></input>
                </div>
                <section className='about-me-team__text'>
                    Вот уже 20 лет я занимаюсь волейболом. Спорт помог мне найти множество друзей и знакомых, научил находить общий язык с людьми разного характера, возраста и мировоззрения, преподал уроки дисциплины, пунктуальности и ответственности за результат.
                    Я получил звание кандидата в мастера спорта, стал победителем и призером различных чемпионатов и кубков, а также мне посчастливилось тренировать прекарсную команду девушек.
                </section>
                <div className='photo-team_box3'>
                        <input type="image" img='true' className='photo' src={PhotoTeam4} alt="photo4"></input>
                </div> 
            </div>
        </div>
    )
}