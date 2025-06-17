import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import styles from './StudentDashboard.module.css';

export default function StudentDashboard() {
  const [studentData, setStudentData] = useState(null);
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Step 1: Find the student under any institute
        const institutesSnapshot = await getDocs(collection(db, 'institutes'));

        institutesSnapshot.forEach(async (instituteDoc) => {
          const studentQuery = query(
            collection(db, 'institutes', instituteDoc.id, 'students'),
            where('email', '==', user.email)
          );

          const studentSnapshot = await getDocs(studentQuery);
          if (!studentSnapshot.empty) {
            const studentDoc = studentSnapshot.docs[0];
            const studentInfo = { ...studentDoc.data(), id: studentDoc.id };
            setStudentData(studentInfo);

            // Step 2: Realtime listen attendance
            const attendanceRef = collection(
              db,
              'institutes',
              instituteDoc.id,
              'students',
              studentDoc.id,
              'attendance'
            );

            onSnapshot(attendanceRef, (snap) => {
              const list = snap.docs.map((doc) => doc.data());
              setAttendanceList(list);
            });
          }
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return <>   
   <div className={styles.studentDashboard}>
         <img src="../public/swca.jpg"/>
        <h2 className={styles.studentHead}>Wel come SWCA Student dashboard</h2>
  </div>
    <div className={styles.dashboard}>

      <h2 className={styles.h2}>Student Dashboard</h2>
      {studentData ? (
        <div className={styles.profile}>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Email:</strong> {studentData.email}</p>
          <p><strong>Phone:</strong> {studentData.phone}</p>
          <p><strong>Total Attendance:</strong> {attendanceList.length}</p>
        </div>
      ) : (
        <p>Loading student data...</p>
      )}

      <h3 className='time-his'>📅 Attendance History</h3>
      <ul className={styles.attendanceList}>
        {attendanceList.map((entry, index) => (
          <li key={index}>
            {entry.date} at {entry.time}
          </li>
        ))}
      </ul>
    </div>
  </>

}
