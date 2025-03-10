import React from 'react';

const DoctorList = ({ doctors, onBookAppointment }) => {
  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <img src={doctor.image} alt={doctor.name} />
          <h3>{doctor.name}</h3>
          <p>{doctor.specialization}</p>
          <p>{doctor.clinicAddress}</p>
          <p>{doctor.experience}</p>
          <button onClick={() => onBookAppointment(doctor)}>Book Appointment</button>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;