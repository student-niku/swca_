
import s from "./FooterCompo.module.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
const adressData = [
    {
        icon:<FaLocationDot />,
        Name:"Adsres",
        addres:"Taraiya,Saran,Bihar 841424"
    },
    {
        icon:<FaLocationDot />,
        Name:"Adsres",
        addres:"Taraiya,Saran,Bihar 841424"
    },
    {
        icon:<FaLocationDot />,
        Name:"Adsres",
        addres:"Taraiya,Saran,Bihar 841424"
    },
];

   
export const FooterCompo =()=>{
   
    return<>
    <div className={s.container}>
       <div className={s.imgcontainer}>
            <img src="../public/swca.jpg" alt="" />
            <img src="../public/swca.jpg" alt="" />
            <img src="../public/swca.jpg" alt="" />
            <img src="../public/swca.jpg" alt="" />
              
       </div> 
       <div className={s.imgcontainerres}>
        <img src="../public/swca.jpg" alt="" />
        </div> 
    </div>
    <div className={s.finalcontainer}>
        <div className={s.adress}>
            <div className={s.firstAdress} id={s.border}>
                <div className={s.firstAdressIcon}>
                    <FaLocationDot  />
                </div>
                <div className={s.firstAdressData}>
                    <h3>Adress</h3>
                    <p>Taraiya,Saran,Bihar 841424</p>
                </div>
                
            </div>
            <div className={s.firstAdress} id={s.border}>
                    <div className={s.firstAdressIcon}>
                    <IoIosCall />
                    </div>
                    <div className={s.firstAdressData}>
                        <h3>Phone Number</h3>
                        <p>+916205137329</p>
                    </div>
            </div>
            <div className={s.firstAdress} >
                    <div className={s.firstAdressIcon}>
                    <FaLocationDot  />
                    </div>
                    <div className={s.firstAdressData}>
                        <h3>Email Address</h3>
                        <p>swca08@gmail.com</p>
                    </div>
            </div>
        </div> 

        <div className={s.footer}>
            <div className={s.footerdiv1}>
                  <div className={s.head}><h1>OUR EXPERIENCED STAFFS</h1></div>   
            </div>
            <div className={s.footerdiv2}></div>
        </div>  
    </div>
    </>
}