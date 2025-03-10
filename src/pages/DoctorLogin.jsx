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

  // Default doctor credentials
  const defaultDoctors = [
    { name: 'Dr. John Doe', email: 'doctor1@gmail.com', password: 'password1' },
    { name: 'Dr. Jane Smith', email: 'doctor2@gmail.com', password: 'password2' },
    { name: 'Dr. Emily Johnson', email: 'doctor3@gmail.com', password: 'password3' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate login
      const doctor = defaultDoctors.find(
        (doc) => doc.email === formData.email && doc.password === formData.password
      );
      if (doctor) {
        localStorage.setItem('isDoctorLoggedIn', true);
        localStorage.setItem('doctorEmail', doctor.email);
        localStorage.setItem('doctorName', doctor.name); // Store doctor's name
        alert('Login successful!');
        navigate('/doctor-dashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Simulate signup
      if (formData.name && formData.email && formData.password) {
        localStorage.setItem('isDoctorLoggedIn', true);
        localStorage.setItem('doctorEmail', formData.email);
        localStorage.setItem('doctorName', formData.name); // Store doctor's name
        alert('Signup successful!');
        navigate('/doctor-dashboard');
      } else {
        setError('Please fill all fields');
      }
    }
  };

  return (
    <div className="doctor-login">
      <div className="auth-container">
        <h2>Doctor Login</h2>
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
        <h2>Why Join MediBook as a Doctor?</h2>
        <div className="features-list">
          <div className="feature-card">
            <h3>📅 Manage Appointments</h3>
            <p>
              Easily manage your appointments and view your schedule in one place.
            </p>
          </div>
          <div className="feature-card">
            <h3>📂 Access Patient Records</h3>
            <p>
              Securely access and update patient records from anywhere.
            </p>
          </div>
          <div className="feature-card">
            <h3>🔔 Real-Time Notifications</h3>
            <p>
              Get instant notifications for new appointments and updates.
            </p>
          </div>
          <div className="feature-card">
            <h3>💼 Grow Your Practice</h3>
            <p>
              Reach more patients and grow your practice with our platform.
            </p>
          </div>
          <div className="feature-card">
            <h3>📊 Analytics & Reports</h3>
            <p>
              Get detailed analytics and reports to track your performance.
            </p>
          </div>
          <div className="feature-card">
            <h3>🛠️ Easy-to-Use Tools</h3>
            <p>
              Use our intuitive tools to manage your practice efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;