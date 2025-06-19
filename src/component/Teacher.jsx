import styles from "./Teacher.module.css"

export const Teacher = ()=>{
    const data =[
        {
            src:"/public/ADT.jpg",
            position :"Directer",
            Name : "ADARSH KUMAR"
        },
        {
            src:"/public/NST.jpg",
            position :"Examination Controller",
            Name : "NAVIN SHARMA"
        },
        {
            src:"/public/PKT.jpg",
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