import style from "./Cirtifications.module.css"
import { NavLink } from "react-router-dom"
export const Certifications = () => { 
    return <> <div className={style.containers}>
    <h1>SIMPLE CIRTIFICATION</h1>
    <div className={style.head}>
     <NavLink to="/"><span className={style.name}>HOME</span>  </NavLink> <span className={style.our}>//  Cirtification</span>
    </div>
</div>

    </>
}