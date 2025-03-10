import React, { useState, useEffect } from 'react';

const AppointmentModal = ({
  doctor,
  onClose,
  onConfirm,
}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Check if the user is logged in as a patient
  const isPatientLoggedIn = localStorage.getItem('isPatientLoggedIn');

  useEffect(() => {
    // If the user is not logged in, close the modal
    if (!isPatientLoggedIn) {
      onClose();
      alert('Please login as a patient to book an appointment.');
    }
  }, [isPatientLoggedIn, onClose]);

  const handleConfirm = () => {
    if (!date || !time) {
      alert('Please fill in all fields.');
      return;
    }
    onConfirm({ doctor, date, time });
  };

  if (!isPatientLoggedIn) {
    return null; // Do not render the modal if the user is not logged in
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Book Appointment with {doctor.name}</h3>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <div className="modal-actions">
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;