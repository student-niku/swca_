import React, { useState } from 'react';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('student');
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Registration successful! You can now login.");
        setIsRegister(false);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login successful!");
        setTimeout(() => {
          type === 'institute' ? navigate('/institute') : navigate('/student');
        }, 1000);
      }
    } catch (err) {
      toast.error((isRegister ? "Registration" : "Login") + " failed: " + err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast.warn("Please enter your email to reset password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent!");
    } catch (err) {
      toast.error("Failed to send reset email: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer position="top-center" />
      <form className="login-card" onSubmit={handleLogin}>
        <h2>{isRegister ? 'Register' : 'Login'}</h2>

        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="student">Student</option>
          <option value="institute">Institute</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">{isRegister ? 'Register' : 'Login'}</button>

        {!isRegister && (
          <p className="forgot-text" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
        )}

        <p className="toggle-text">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <span
            onClick={() => setIsRegister(!isRegister)}
            className="toggle-link"
          >
            {isRegister ? ' Login here' : ' Register here'}
          </span>
        </p>
      </form>
    </div>
  );
}
