import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientLogin = () => {
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
      if (formData.email === 'patient@example.com' && formData.password === 'password') {
        localStorage.setItem('isPatientLoggedIn', true);
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Simulate signup
      if (formData.name && formData.email && formData.password) {
        localStorage.setItem('isPatientLoggedIn', true);
        navigate('/');
      } else {
        setError('Please fill all fields');
      }
    }
  };

  return (
    <div className="patient-login">
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

      <div className="patient-content">
        <h2>Why Join MediBook?</h2>
        <div className="features-list">
          <div className="feature-card">
            <h3>Book Appointments Easily</h3>
            <p>
              Schedule appointments with top doctors in just a few clicks.
            </p>
          </div>
          <div className="feature-card">
            <h3>Access Medical Records</h3>
            <p>
              Securely access your medical records anytime, anywhere.
            </p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Notifications</h3>
            <p>
              Get instant updates about your appointments and health tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;