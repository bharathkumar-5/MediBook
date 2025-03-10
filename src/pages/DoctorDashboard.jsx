import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import CustomEvent from '../components/CustomEvent';

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
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState('month');

  // Get the logged-in doctor's name
  const doctorName = localStorage.getItem('doctorName'); // Assume this is set during login

  // Load appointments from localStorage on component mount
  useEffect(() => {
    setIsLoading(true);
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    // Filter appointments for the logged-in doctor
    const doctorAppointments = savedAppointments.filter(
      (app) => app.doctorName === doctorName
    );
    setTimeout(() => {
      setAppointments(doctorAppointments);
      setIsLoading(false);
    }, 1000);
  }, [doctorName]);

  return (
    <div className="doctor-dashboard p-6 bg-gray-100 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Doctor Dashboard</h1>
      <div className="calendar-container bg-white rounded-lg shadow-lg p-6 mx-auto max-w-4xl">
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <TailSpin color="#3174ad" height={50} width={50} />
          </div>
        ) : (
          <Calendar
            localizer={localizer}
            events={appointments}
            startAccessor="start"
            endAccessor="end"
            selectable
            view={view}
            onView={setView}
            defaultView="month"
            views={['month', 'week', 'day', 'agenda']}
            style={{ height: 500, margin: '0 auto' }}
            components={{
              event: CustomEvent,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;