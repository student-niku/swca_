import React from 'react';
import styles from './StudentForm.module.css';
export const StudentForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_card}>
                <div className={styles.img}>
                    <img src="../public/swca.jpg" alt="" />
                </div>
                <h3>Welcome! let's get started</h3>
                <p>Sign in to continue.</p>
                <div className={styles.form}>
                    <form action="">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Sing in</button>
                        <div className={styles.forget}>
                          <a href="#">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}