import React from 'react';
import styles from './ApplyJobs.module.css';
import { FaGlobe, FaLinkedin } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';

const jobLinks = [
  { name: 'JobHai.com', link: 'https://www.jobhai.com', icon: <FaGlobe /> },
  { name: 'LinkedIn', link: 'https://www.linkedin.com', icon: <FaLinkedin /> },
  { name: 'ApnaJob.com', link: 'https://www.apnajob.com', icon: <FaGlobe /> },
  { name: 'WorkIndia', link: 'https://www.workindia.in', icon: <FaGlobe /> },
  { name: 'Naukri.com', link: 'https://www.naukri.com', icon: <FaGlobe /> },
  { name: 'Indeed', link: 'https://www.indeed.com', icon: <SiIndeed /> },
];

export default function ApplyJobs() {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Apply for Jobs</h2>
      <p className={styles.subheading}>
        Explore job opportunities through trusted platforms:
      </p>
      <div className={styles.grid}>
        {jobLinks.map((job, index) => (
          <a
            key={index}
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.icon}>{job.icon}</div>
            <span className={styles.name}>{job.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
