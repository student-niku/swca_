import React from "react";
import styles from "./FranchiseForm.module.css";  // CSS Module Import

const FranchiseForm = () => {
  return (
    <div className={styles.container}>
      <h2>Franchise Registration</h2>
      <form>
        <div className={styles.formRow}>
          <input type="text" placeholder="Institution Name" required />
          <input type="text" placeholder="Center Owner Name" required />
        </div>

        <div className={styles.formRow}>
          <select required>
            <option value="">--Select Designation--</option>
            <option value="Owner">Owner</option>
            <option value="Manager">Manager</option>
          </select>
          <input type="date" required />
        </div>

        <div className={styles.formRow}>
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Mobile Number" required />
        </div>

        <div className={styles.formRow}>
          <input type="text" placeholder="Full Address" required />
          <input type="text" placeholder="Taluka Name" required />
        </div>

        <div className={styles.formRow}>
          <input type="text" placeholder="Postal Code" required />
          <select required>
            <option value="">--Select State--</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Gujarat">Gujarat</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <input type="text" placeholder="City" required />
          <input type="text" value="INDIA" readOnly />
        </div>

        <div className={styles.formRow}>
          <input type="number" placeholder="Total number of computers" required />
          <input type="number" placeholder="Total number of staff" required />
        </div>

        <div className={styles.checkboxContainer}>
          <input type="checkbox" required />
          <label>I agree to the terms and conditions for franchise.</label>
        </div>

        <div className={styles.checkboxContainer}>
          <input type="checkbox" required />
          <label>Please check this tick to agree to receive SMS, Email, Call.</label>
        </div>

        <div className={styles.captchaContainer}>
          <label>Enter the contents of image</label>
          <div className={styles.captchaBox}>
            <input type="text" required />
            <span className={styles.captcha}>76815</span>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.registerBtn}>Register</button>
          <button type="reset" className={styles.cancelBtn}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FranchiseForm;
