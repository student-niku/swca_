 
 import React from 'react';
 import { NavLink } from 'react-router-dom';
 import styles from './Heading.module.css';
 export const Heading = () => {
    return (
        <>
          <div className={styles.container}>
        <h1>OUR COURSES</h1>
        <div className={styles.head}>
         <NavLink to="/"><span className={styles.name}>HOME</span>  </NavLink> <span className={styles.our}>// Our Courses</span>
        </div>
    </div>
        </>
    );
}