import React, { useState } from 'react';
import CalendarView from '../components/CalendarView';
import AppointmentModal from '../components/AppointmentModal';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setShowModal(true);
  };

  const handleConfirmBooking = (appointment) => {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    setShowModal(false);
    navigate('/appointments');
  };

  return (
    <div className="booking-page">
      <h1>Book an Appointment</h1>
      <CalendarView onSelectSlot={handleSelectSlot} />
      {showModal && (
        <AppointmentModal
          slot={selectedSlot}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default BookingPage;