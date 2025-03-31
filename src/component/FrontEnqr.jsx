import React, { useState, useEffect } from "react";
import styles from "./FrontEnqr.module.css"; // CSS Module

const FrontEnqr = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Page Load होते ही Popup Show हो
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.formContainer}>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>❌</button>
            <h2>Inquiry Form</h2>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Message:</label>
              <textarea placeholder="Your message..." required />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FrontEnqr;
