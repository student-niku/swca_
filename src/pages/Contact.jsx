import React from 'react';
import styles from './Contact.module.css';
import { NavLink } from 'react-router-dom';
export const Contact = () => { 

//     const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully!");
//     setForm({ name: '', email: '', message: '' });
//   };
    return <>
    <div className={styles.ContactContainer}>
                <h1 className={styles.heading}> Contact  Us</h1>
                <div className={styles.links}>
                   <NavLink to='/'> <span className={styles.home}>Home</span></NavLink> <span className={styles.contact}>//Contact Us</span>
                </div>
    </div>

    {/* <div>
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
    </div> */}
    <div className={styles.container}>
     <form >
        <div className={styles.contant}>
             <input
               type='text'
               name='name'
               placeholder='Enter Name'
               required
               className={styles.input}
            />
            <input
               type='email'
               name='email'
               placeholder='Enter Email'
               required
               className={styles.input}
            />
        </div>
        <div className={styles.contant}>
            <input
               type='number'
               name='number'
               placeholder='Enter Number'
               required
               className={styles.input}
            />
            <select name="" className={styles.select}>
                <option value="">Admmision</option>
            </select>
            </div>
            <button type='submit' className={styles.button}>Send a Massege</button>
        </form>
    </div>
    </>
}