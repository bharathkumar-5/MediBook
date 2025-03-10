import React from 'react';
import AppointmentDetails from '../components/AppointmentDetails';

const UserDashboard = () => {
  const appointments = [
    {
      id: 1,
      doctor: { name: 'Dr. John Doe' },
      date: '2023-10-25',
      time: '10:00 AM',
    },
    {
      id: 2,
      doctor: { name: 'Dr. Jane Smith' },
      date: '2023-10-26',
      time: '11:00 AM',
    },
  ];

  return (
    <div className="user-dashboard">
      <h1>Your Appointments</h1>
      {appointments.map((appointment) => (
        <AppointmentDetails key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

export default UserDashboard;