import style from "./services.module.css"
import { NavLink } from "react-router-dom";
const cardData = [
    { title: "COACHING CLASSES", subtitle: "10TH SCIENCE 12TH COMMERCE" },
    { title: "COMPUTER LAB ROOM", subtitle: "COMPUTER LAB ROOM" },
    { title: "AADHAR CENTER", subtitle: "AADHAR CENTER" }
  ];

export const Services = () =>{
    return<>
      <div className={style.containers}>
        <h1>OUR SERVICES</h1>
        <div className={style.head}>
         <NavLink to="/"><span className={style.name}>HOME</span>  </NavLink> <span className={style.our}>//  Our Services</span>
        </div>
    </div>
      <div className={style.container}>
      {cardData.map((item, index) => (
        <div className={style.card} key={index}>
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
    </>
}