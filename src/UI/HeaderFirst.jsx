import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaYoutube, FaAndroid } from "react-icons/fa";
import styles from "./HeaderFirst.module.css"; // Import CSS Module
const HeaderFirst = () => {
    return <>
     <header className={styles.header}>
      <div className={styles.headerLeft}>
        <FaAndroid className={styles.iconheader} />
        <span >Welcome to <h5> SUCCESS WARRIOR COMPUTER ACADEMY</h5></span>
      </div>
      
      <div className={styles.headerRight}>
       <NavLink to="https://swca.co.in/"> <FaFacebook className={styles.icon} /></NavLink>
       <NavLink to="https://swca.co.in/"><FaInstagram className={styles.icon} /></NavLink>
       <NavLink to="https://swca.co.in/"><FaLinkedin className={styles.icon} /></NavLink> 
       <NavLink to="https://swca.co.in/"><FaTelegram className={styles.icon} /></NavLink>  
       <NavLink to="https://swca.co.in/"><FaTwitter className={styles.icon} /></NavLink>
        <NavLink to="https://swca.co.in/"><FaYoutube className={styles.icon} /></NavLink>

      </div>
    </header>
    </>
}

export default HeaderFirst;
