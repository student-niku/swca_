import React from "react";
import styles from "./Accordion.module.css";
import { IoIosArrowDown } from "react-icons/io";
const Accordion = () => {
  const data = [
    { title: "Our Mission", 
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe derit in voluptate velit esse cillum. sfgvserd sdfcbnlaknxlinkll lkninionlknxx "
    },
    { title: "Our Vision",      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe derit in voluptate velit esse cillum. sfgvserd sdfcbnlaknxlinkll lkninionlknxx " },
  ];

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.accordion}>
          <div className={styles.header}>{item.title}
           <IoIosArrowDown />
          </div>
          <p className={styles.content}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
