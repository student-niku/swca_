import React, { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './InstituteDashboard.css';
import Swca from '../assets/Swca.jpg';
export default function InstituteDashboard() {
  const [instituteId, setInstituteId] = useState('');
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState('');
  const [attendanceData, setAttendanceData] = useState({ date: '', time: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(db, 'institutes'), where('email', '==', user.email));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const docRef = snapshot.docs[0];
          setInstituteId(docRef.id);

          const studentsRef = collection(db, 'institutes', docRef.id, 'students');
          onSnapshot(studentsRef, (snap) => {
            const list = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setStudents(list);
          });
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !instituteId) {
      alert('Please fill all fields or wait till InstituteID loads');
      return;
    }

    await addDoc(collection(db, 'institutes', instituteId, 'students'), {
      ...formData
    });

    setFormData({ name: '', phone: '', email: '' });
  };

  const openAttendanceForm = (studentId) => {
    setCurrentStudentId(studentId);
    setShowPopup(true);
  };

  const handleAttendanceSubmit = async (e) => {
    e.preventDefault();
    if (!attendanceData.date || !attendanceData.time) return;

    const attendanceRef = collection(
      db,
      'institutes',
      instituteId,
      'students',
      currentStudentId,
      'attendance'
    );

    await addDoc(attendanceRef, {
      ...attendanceData,
      timestamp: new Date()
    });

    setAttendanceData({ date: '', time: '' });
    setShowPopup(false);
  };

  return <>
  <div className="institute-dashboard">
  <img src={Swca} alt="SWCA Logo" className='logo' />
      <h2 className='institute-head'>Wel come SWCA Institute dashboard</h2>
  </div>
    <h1 className='head'>SWCA DASHBOARD</h1>
    <div className="dashboard">
      <h2>Add a New Student</h2>

      <form className="student-form" onSubmit={handleAddStudent}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <button type="submit">Add Student</button>
      </form>

      <h3>Students List</h3>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students
              .filter((stu) =>
                stu.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((stu) => (
                <tr key={stu.id} className="fade-in">
                  <td>{stu.name}</td>
                  <td>{stu.phone}</td>
                  <td>{stu.email}</td>
                  <td>
                    <button onClick={() => openAttendanceForm(stu.id)}>Mark</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="popup">
          <form className="popup-form" onSubmit={handleAttendanceSubmit}>
            <h3>Mark Attendance</h3>
            <input
              type="date"
              value={attendanceData.date}
              onChange={(e) => setAttendanceData({ ...attendanceData, date: e.target.value })}
            />
            <input
              type="time"
              value={attendanceData.time}
              onChange={(e) => setAttendanceData({ ...attendanceData, time: e.target.value })}
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  </>;
}
