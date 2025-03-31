import styles from "./DetailCard.module.css"; // CSS Module Import
import { FaBook } from "react-icons/fa";
import { RiBookShelfLine } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
export const DetailCard = () =>{
    useGSAP(()=>{
        gsap.from(".first",{
            x:-30,
            opacity:0,
            duration:1,
            delay:1,
            scrollTrigger:'.first'
        })
    })
   return<>
        <div className={styles.container}>
            <div className={styles.card_div}>
                <div className={styles.card} id='first'>
                    <div className={styles.circle_card}>
                      <FaBook />
                    </div>
                   <h2 id={styles.h2}>Courses</h2>
                    <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
                <div className={styles.card} id={styles.color1}>
                    <div className={styles.circle_card} id={styles.color1}>
                      <RiBookShelfLine /> 
                    </div>
                    <h2>Books and library</h2>
                    <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
                <div className={styles.card}id={styles.color2} >
                    <div className={styles.circle_card}id={styles.color2} >
                    <IoPersonSharp />
                    </div>
                    <h2>Teachers</h2>
                    <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
                <div className={styles.card} id={styles.color3}>
                    <div className={styles.circle_card} id={styles.color3}>
                     <FaGraduationCap />
                    </div>
                    <h2>Certification</h2>
                    <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                </div>
            </div>
        </div>
   </>
}