import React from 'react';

const AppointmentDetails = ({ appointment }) => {
  return (
    <div className="appointment-details">
      <h3>Appointment Details</h3>
      <p><strong>Doctor:</strong> {appointment.doctorName}</p>
      <p><strong>Date:</strong> {appointment.date}</p>
      <p><strong>Time:</strong> {appointment.time}</p>
    </div>
  );
};

export default AppointmentDetails;