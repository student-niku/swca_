import React from 'react';
import styles from './DetailCard.module.css';
import { FaBullhorn, FaBook, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';

const features = [
  {
    icon: <FaBullhorn />,
    title: 'Courses',
    description: 'Lorem ipsum dolor sit amet Sed nec molestie justo',
    bgColor: '#d97300',
  },
  {
    icon: <FaBook />,
    title: 'Books & Library',
    description: 'Lorem ipsum dolor sit amet Sed nec molestie justo',
    bgColor: '#4b004d',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Teachers',
    description: 'Lorem ipsum dolor sit amet Sed nec molestie justo',
    bgColor: '#5c0000',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Certification',
    description: 'Lorem ipsum dolor sit amet Sed nec molestie justo',
    bgColor: '#006400',
  },
];

export default function DetailCard() {
  return (
    <div className={styles.container}>
      {features.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.iconCircle} style={{ backgroundColor: item.bgColor }}>
            {item.icon}
          </div>
          <div className={styles.content} style={{ backgroundColor: item.bgColor }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
