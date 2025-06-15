import React from 'react';
import s from './About.module.css';
import { NavLink } from 'react-router-dom';
export const About = () => { 
    return <>
         <div className={s.AboutContainer}>
            <h1 className={s.head}> About Us</h1>
            <div className={s.link}>
               <NavLink to='/'> <span className={s.home}>Home</span></NavLink> <span className={s.about}>//About Us</span>
            </div>
         </div>

    </>
}