import React from 'react';
import AppointmentDetails from '../components/AppointmentDetails';

const AppointmentsPage = () => {
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

  return (
    <div className="appointments-page">
      <h1>Your Appointments</h1>
      <div className="appointments-list">
        {appointments.map((appointment, index) => (
          <AppointmentDetails key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentsPage;