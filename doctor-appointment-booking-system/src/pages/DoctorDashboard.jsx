import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AppointmentModal from '../components/AppointmentModal';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Load appointments from localStorage on component mount
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(savedAppointments);
  }, []);

  // Save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  // Handle selecting a slot in the calendar
  const handleSelectSlot = (slot) => {
    setSelectedAppointment({
      start: slot.start,
      end: slot.end,
      title: 'New Appointment',
    });
    setIsEditing(false);
    setShowModal(true);
  };

  // Handle selecting an existing appointment
  const handleSelectEvent = (event) => {
    setSelectedAppointment(event);
    setIsEditing(true);
    setShowModal(true);
  };

  // Handle saving or updating an appointment
  const handleSaveAppointment = (appointment) => {
    if (isEditing) {
      // Update existing appointment
      const updatedAppointments = appointments.map((app) =>
        app.id === appointment.id ? appointment : app
      );
      setAppointments(updatedAppointments);
    } else {
      // Add new appointment
      const newAppointment = { ...appointment, id: Date.now() };
      setAppointments([...appointments, newAppointment]);
    }
    setShowModal(false);
  };

  // Handle deleting an appointment
  const handleDeleteAppointment = (id) => {
    const updatedAppointments = appointments.filter((app) => app.id !== id);
    setAppointments(updatedAppointments);
    setShowModal(false);
  };

  return (
    <div className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={appointments}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          style={{ height: 600, margin: '20px' }}
        />
      </div>

      {showModal && (
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setShowModal(false)}
          onSave={handleSaveAppointment}
          onDelete={handleDeleteAppointment}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default DoctorDashboard;