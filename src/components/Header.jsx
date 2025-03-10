import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const userEmail = localStorage.getItem('userEmail');
  const userType = localStorage.getItem('userType'); // 'patient' or 'doctor'

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userType');
    window.location.reload(); // Refresh the page to update the UI
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MediBook</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {isLoggedIn ? (
            <>
              <li>{userEmail}</li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/doctor-login">Doctor Login</Link></li>
              <li><Link to="/patient-login">Patient Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;