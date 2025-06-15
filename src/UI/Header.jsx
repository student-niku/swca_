
import React, { useState } from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Navmanu } from '../component/Navmanu';

export const Header = () => {
    const [menuStatus ,setMenuStatus] = useState(false);
    useGSAP(()=>{
        gsap.from('h3',{
            y:-30,
            duration:1,
            opacity:0,
            stagger:0.1,
            delay:0.5
        })
    })
    return <>
    <div className={styles.header}>

        <div className={styles.headercard} >
        <NavLink to="/"><h3>Home</h3></NavLink>
        <NavLink to="/about"><h3>About</h3></NavLink>
        <NavLink to="/courses"><h3>Courses</h3></NavLink>
        <NavLink to="/services"><h3>our services</h3></NavLink>
        <NavLink to="/achievers"><h3> Our Achievers</h3></NavLink>
        <NavLink to="/gallery"><h3>Gallery</h3></NavLink>
        <NavLink to="/job"><h3>Job Updates</h3></NavLink>
        <NavLink to="/certifications"><h3> Certifications</h3></NavLink>
        <NavLink to="/franchise"><h3>Franchise</h3></NavLink>
        <NavLink to="/contact"><h3>contact</h3> </NavLink>
        </div>
        
     </div>
     <Navmanu />
    </>
}