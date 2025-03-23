import style from "./Achievers.module.css"
import { NavLink } from "react-router-dom"
export const Achievers = () => { 
    return <>
    <div className={style.containers}>
    <h1>OUR ACHIEVERS
    </h1>
    <div className={style.head}>
         <NavLink to="/"><span className={style.name}>HOME</span>  </NavLink> <span className={style.our}>//Our Achievers
         </span>
        </div>
    </div>
    </>
}