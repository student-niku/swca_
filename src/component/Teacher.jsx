import styles from "./Teacher.module.css"
import Adt from "../assets/ADT.jpg"
import Nst from "../assets/NST.jpg"
import Pkt from "../assets/PKT.jpg"
export const Teacher = ()=>{
    const data =[
        {
            src:Adt,
            position :"Directer",
            Name : "ADARSH KUMAR"
        },
        {
            src:Nst,
            position :"Examination Controller",
            Name : "NAVIN SHARMA"
        },
        {
            src:Pkt,
            position :"Computer Teacher",
            Name : "PRIYANKA KUMARI"
        },
    ]
    return<>
        <div className={styles.container}>
            <div className={styles.head}><h1>OUR EXPERIENCED STAFFS</h1></div>
            <div className={styles.cardrow}>
            {data.map((item)=>(
                <div className={styles.card}>
                    <img src={item.src} alt="" />
                    <div className={styles.detailcard}>
                        <h1>{item.Name}</h1>
                        <p>{item.position}</p>
                    </div>
                    <div className={styles.hover}>
                        <div className={styles.hovercenter}>
                            <h1>{item.Name}</h1>
                            <p>{item.position}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </>
}