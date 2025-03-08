import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate login
      if (formData.email === 'doctor@example.com' && formData.password === 'password') {
        localStorage.setItem('isDoctorLoggedIn', true);
        navigate('/doctor-dashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Simulate signup
      if (formData.name && formData.email && formData.password) {
        localStorage.setItem('isDoctorLoggedIn', true);
        navigate('/doctor-dashboard');
      } else {
        setError('Please fill all fields');
      }
    }
  };

  return (
    <div className="doctor-login">
      <div className="auth-container">
        <div className="auth-tabs">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        <p className="switch-text">
          {isLogin
            ? "Don't have an account? "
            : 'Already have an account? '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>

      <div className="doctor-content">
        <h2>Why Join MediBook?</h2>
        <div className="features-list">
          <div className="feature-card">
            <h3>Manage Appointments</h3>
            <p>
              Easily manage your appointments and view your schedule in one place.
            </p>
          </div>
          <div className="feature-card">
            <h3>Access Patient Records</h3>
            <p>
              Securely access and update patient records from anywhere.
            </p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Notifications</h3>
            <p>
              Get instant notifications for new appointments and updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;