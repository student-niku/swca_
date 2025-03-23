import Course from "../component/Course"
import styles from "./Courses.module.css"
import { NavLink } from "react-router-dom"
export const Courses = () =>{
    return<>
    <div className={styles.container}>
        <h1>OUR COURSES</h1>
        <div className={styles.head}>
         <NavLink to="/"><span className={styles.name}>HOME</span>  </NavLink> <span className={styles.our}>// Our Courses</span>
        </div>
    </div>
    <Course></Course>
    </>
}