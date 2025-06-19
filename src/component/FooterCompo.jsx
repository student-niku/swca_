
import s from "./FooterCompo.module.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";


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
            <img src="/public/swca.jpg" alt="" />
            <img src="/public/swca.jpg" alt="" />
            <img src="/public/swca.jpg" alt="" />
            <img src="/public/swca.jpg" alt="" />
              
       </div> 
       <div className={s.imgcontainerres}>
        <img src="/public/swca.jpg" alt="" />
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
                 <h2>RECENT BLOGS</h2>
            </div>
            <div className={s.footerdiv2}>
                <h2>Quick Links</h2>
                <div className={s.footerlinks}>
                <div className={s.footerlinks1}>
                    <NavLink to="/"><IoIosArrowForward />Home</NavLink>
                    <NavLink to="/download"><IoIosArrowForward />Download</NavLink>
                    <NavLink to="/services"><IoIosArrowForward />Payments Methods</NavLink>
                    <NavLink to="/gallery"><IoIosArrowForward />Disclaimer</NavLink>
                    <NavLink to="/contact"><IoIosArrowForward />Our Affiliations</NavLink>
                    <NavLink to="/blog"><IoIosArrowForward />Our Register Center's</NavLink>
                </div>
                <div className={s.footerlinks2}>
                    <NavLink to="/privacy"><IoIosArrowForward />Privacy Policy</NavLink>
                    <NavLink to="/terms"><IoIosArrowForward />Terms & Conditions</NavLink>
                    <NavLink to="/refund"><IoIosArrowForward />Refund Policy</NavLink>
                    <NavLink to="/sitemap"><IoIosArrowForward />Our Blogs</NavLink>
                    <NavLink to="/contact"><IoIosArrowForward />Our Team</NavLink>
                    <NavLink to="/contact"><IoIosArrowForward />Franchise Details</NavLink>
                </div>
                </div>
            </div>
        </div> 
        <div className={s.footericons}>
            <NavLink to="/"><CiFacebook /></NavLink>
            <NavLink to="/"><FaInstagram /></NavLink>
            <NavLink to="/"><FaLinkedinIn /></NavLink>
            <NavLink to="/"><FaTelegramPlane /></NavLink>
            <NavLink to="/"><CiTwitter /></NavLink>
            <NavLink to="/"><FaYoutube /></NavLink>
        </div> 
        <div className={s.copy}>
            <p>Copyright © 2025 All right reserved designed by : <span><NavLink to='https://ditrpindia.org/'>DITRP INDIA</NavLink></span></p>
        </div>
    </div>
    </>
}