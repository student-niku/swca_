import styles from './About.module.css';
import Swca from '../assets/Swca.jpg';

export const About = ()=>{
    return<>
        <div className={styles.head}>
            <h1 className={styles.title}>About us</h1>
        </div>
        <div className={styles.container}>
            <div className={styles.first}>
                <div className={styles.img}>
                    <img src={Swca} alt="" />
                    <div className={styles.hover}></div>
                </div>
            </div>
            <div className={styles.second}>
                <h1>Welcome To SUCESS WARRIOR COMPUTER <br />ACADEMY</h1>
                <p>WHO WE ARE <br />

                            DASH Info Tech is a leading IT organization & working with a view of having step forwards to build an IT alliance for global change that would lead the youth and for their development. DASH Info Tech is associated with different Government, Private and corporate to provide services and short-term skill training and long-term vocational training program as well as career program within a cliental range of services since last two decades and has offered quality of services and knowledge. It has trained over 25000 candidates at own campus and 1.5 lacs candidates through its network channel partners. <br /><br />

                            

                            Dash Info Tech registered in the year 1997 vide Reg. No. 13/05/97. DASH Info Tech associated with APTECH Ltd in 1997 a renowned multinational IT training company and running various employability enhancement skill & career program in software at Bharatpur, karoli, Dholpur, Udaipur, Jaipur region in Rajasthan and Bijnor, Moradabad in U.P. and Dehradun thru our channel partners. <br /> <br />

                            

                            Gradually it has spread its working area in other district Rajasthan & U.P. We are authorized Service Provider (SP ) of Rajasthan Knowledge Corporation Ltd. (RKCL) Govt of Rajasthan to facilitated more than 125 IT Gyan Kendra to implement the various computer courses &Government sponsored IT programs. <br /> <br />

                            

                            We are doing CSR activities in collaboration of DISHA Foundation in few district of Rajasthan and U.P. (Bharatpur, Dholpur, Sawaimadhopur, Karoli and Bijnor, Moradabad, Dehradun) to deliver the different govt. schemes for Socio economic uplifment and skill enhancement for livelihood promotion. Successfully completed SECC-11 census (A project of MoRD (GoI)) in two districts of Rajasthan. And one District Moradabad in UP. We have covered more than 1.0 crore population. In this project we deployed more than 3000 skilled manpower like District Co-ordinator, Master Trainers, DBAs, DEOs, Charge centre head, Technical heads, Tahaseel supervisor and Admn. Staff and we deployed 100 Computer machines in every tahaseel with all reqired softwares for data collection and submitted to the NIC. <br /> <br />

                            

                            Successfully completed National Population Register (NPR) project in Moradabd, Meerut Districts in UP We have provided more than 1200 youth employment based skill training in collaboration of Rajasthan Skill livelihhod and development corporation(RSLDC) GoR. <br /> <br />

                            

                            Completed BPL census -2002 and data entry work, EDP/ESDP and vocational training for 250 SC/ST and BPLs students. For employability of the students Organization have placement partnership with various IT and ITES companies. <br /> <br />

                            

                            Our Reach: <br /> <br />

                            

                            Rajastan, UP, Uttranchal, Chhatisgarh and Odisha</p>
            </div>
        </div>
    </>
}