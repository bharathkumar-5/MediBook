import React from 'react';
import AppointmentDetails from '../components/AppointmentDetails';

const UserDashboard = () => {
  const patientEmail = localStorage.getItem('patientEmail'); // Get patient's email
  const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  // Filter appointments for the logged-in patient
  const patientAppointments = appointments.filter(
    (app) => app.patientEmail === patientEmail
  );

  return (
    <div className="user-dashboard">
      <h1>Your Appointments</h1>
      {patientAppointments.map((appointment) => (
        <AppointmentDetails key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default UserDashboard;