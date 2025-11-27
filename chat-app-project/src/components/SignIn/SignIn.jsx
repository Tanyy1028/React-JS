import React, { useEffect, useState } from 'react';
import { signIn, fetchUser } from '../../slices/userSlices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import './SignIn.css';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    dispatch(signIn({ email, password }));
    navigate("/home");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>

        <form onSubmit={handleSubmit} className="auth-form">

          <input
            type="email"
            placeholder="Email"
            value={email}
            className="auth-input"
            onChange={(e) => setEmail(e.target.value)}
            // required
          />

          <input
            type="password" 
            placeholder="Password"
            value={password}
            className="auth-input"
            onChange={(e) => setPassword(e.target.value)}
            // required
          />

          <button type="submit" className="auth-btn">
            Continue →
          </button>

        </form>
      </div>
    </div>
  );
}
