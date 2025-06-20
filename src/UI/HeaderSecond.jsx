import React from 'react';
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import  './HeaderSecond.css';
import { NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Swca from '../assets/Swca.jpg';    
export const HeaderSecond = () => {
    useGSAP(()=>{
        gsap.from('.email p',{
            y:30,
            duration:1,
            opacity:0,
            stagger:0.1,
            delay:0.5
        })
    })
    return <>
        <header>
            <div className="div1">
                <img src={Swca} alt="" />
            </div>
            <div className="div2">
            <div className="maildiv">
            <div className="mail-icon"><CiMail className='mail' /> </div> 
            <div className='email'><h3>Mail Us</h3>
            <NavLink to="mailto"><p>kniku4567@gmail.com</p></NavLink>
            </div>
            </div>
            <div className="maildiv"> 
                <div className="mail-icon"><MdOutlinePhoneInTalk /></div>  
            <div className='email'><h3>Call us</h3>
            <NavLink to=""><p>9693750739</p></NavLink>
            </div>
            </div>
            </div>
            <div className="div3">
                <div className="button1">
                   <NavLink to="/auth"><button>student login</button></NavLink>
                </div>
                <div className="button1">
                    <NavLink to="/instutetlogin"><button>Instutet login</button></NavLink>
                </div>
            </div>
        </header>
    </>
}