import "./Navmanu.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
export const Navmanu = ()=>{
    const [menuStatus ,setMenuStatus] = useState(false);
    return<>
    <div className="menu">
        <div className="menuicon">
        <button onClick={()=>setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
        </button></div>
        <div className={`menulinks ${menuStatus ? "active" : ""}`}>
            <NavLink to="/"><h3>Home</h3></NavLink>
            <NavLink to="/about"><h3>About</h3></NavLink>
            <NavLink to="/courses"><h3>Courses</h3></NavLink>
            <NavLink to="/services"><h3>our services</h3></NavLink>
            <NavLink to="/achievers"><h3> Our Achievers</h3></NavLink>
            <NavLink to="/gallely"><h3>Gallery</h3></NavLink>
            <NavLink to="/job"><h3>Job Updates</h3></NavLink>
            <NavLink to="/certifications"><h3> Certifications</h3></NavLink>
            <NavLink to="/franch"><h3>Franchise</h3></NavLink>
            <NavLink to=".contact"><h3>contact</h3> </NavLink>
        </div>
     </div>
    </>
}