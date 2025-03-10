import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";
import AppointmentModal from "../components/AppointmentModal";
// Import custom CSS

const locales = {
  "en-US": enUS,
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
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState("month"); // Default view is "month"

  // Load appointments from localStorage on component mount
  useEffect(() => {
    setIsLoading(true);
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setTimeout(() => {
      setAppointments(savedAppointments);
      setIsLoading(false);
    }, 1000); // Simulate loading delay
  }, []);

  // Save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // Handle selecting a slot in the calendar
  const handleSelectSlot = (slot) => {
    setSelectedAppointment({
      start: slot.start,
      end: slot.end,
      title: "New Appointment",
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
    setIsLoading(true);
    setTimeout(() => {
      if (isEditing) {
        // Update existing appointment
        const updatedAppointments = appointments.map((app) =>
          app.id === appointment.id ? appointment : app
        );
        setAppointments(updatedAppointments);
        toast.success("Appointment updated successfully!");
      } else {
        // Add new appointment
        const newAppointment = { ...appointment, id: Date.now() };
        setAppointments([...appointments, newAppointment]);
        toast.success("Appointment created successfully!");
      }
      setIsLoading(false);
      setShowModal(false);
    }, 1000); // Simulate saving delay
  };

  // Handle deleting an appointment
  const handleDeleteAppointment = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      const updatedAppointments = appointments.filter((app) => app.id !== id);
      setAppointments(updatedAppointments);
      toast.success("Appointment deleted successfully!");
      setIsLoading(false);
      setShowModal(false);
    }, 1000); // Simulate deletion delay
  };

  // Handle changing the view (Month, Week, Day, Agenda)
  const handleViewChange = (newView) => {
    setView(newView);
  };

  // Handle navigating to today's date
  const handleNavigateToToday = () => {
    const today = new Date();
    setSelectedAppointment(null);
    setView("month"); // Reset to the default view
  };

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
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            view={view} // Set the current view
            onView={handleViewChange} // Handle view changes
            defaultView="month" // Default view when the calendar loads
            views={["month", "week", "day", "agenda"]} // Enable all views
            style={{ height: 500, margin: "0 auto" }} // Adjust height and center the calendar
            components={{
              toolbar: (props) => (
                <div className="rbc-toolbar">
                  <span className="rbc-btn-group">
                    <button onClick={() => handleNavigateToToday()}>Today</button>
                    <button onClick={() => props.onNavigate("PREV")}>Back</button>
                    <button onClick={() => props.onNavigate("NEXT")}>Next</button>
                  </span>
                  <span className="rbc-btn-group">
                    <button
                      className={view === "month" ? "rbc-active" : ""}
                      onClick={() => handleViewChange("month")}
                    >
                      Month
                    </button>
                    <button
                      className={view === "week" ? "rbc-active" : ""}
                      onClick={() => handleViewChange("week")}
                    >
                      Week
                    </button>
                    <button
                      className={view === "day" ? "rbc-active" : ""}
                      onClick={() => handleViewChange("day")}
                    >
                      Day
                    </button>
                    <button
                      className={view === "agenda" ? "rbc-active" : ""}
                      onClick={() => handleViewChange("agenda")}
                    >
                      Agenda
                    </button>
                  </span>
                </div>
              ),
            }}
          />
        )}
      </div>

      {showModal && (
        <AppointmentModal
          appointment={selectedAppointment}
          onClose={() => setShowModal(false)}
          onSave={handleSaveAppointment}
          onDelete={handleDeleteAppointment}
          isEditing={isEditing}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default DoctorDashboard;