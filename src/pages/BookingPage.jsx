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
    // Include doctor's name and patient's email in the appointment
    const newAppointment = {
      ...appointment,
      id: Date.now(),
      doctorName: appointment.doctor.name,
      patientEmail: appointment.patientEmail,
      start: new Date(`${appointment.date}T${appointment.time}`),
      end: new Date(new Date(`${appointment.date}T${appointment.time}`).getTime() + 60 * 60 * 1000), // 1 hour duration
      title: `Appointment with ${appointment.doctor.name}`,
    };
    appointments.push(newAppointment);
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
          doctor={selectedSlot?.doctor} // Pass the selected doctor
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default BookingPage;