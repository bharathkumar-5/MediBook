import React, { useState, useEffect } from 'react';

const AppointmentModal = ({
  appointment,
  onClose,
  onSave,
  onDelete,
  isEditing,
}) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  useEffect(() => {
    if (appointment) {
      setTitle(appointment.title);
      setStart(new Date(appointment.start));
      setEnd(new Date(appointment.end));
    }
  }, [appointment]);

  const handleSave = () => {
    const updatedAppointment = {
      ...appointment,
      title,
      start,
      end,
    };
    onSave(updatedAppointment);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{isEditing ? 'Edit Appointment' : 'Add Appointment'}</h3>
        <input
          type="text"
          placeholder="Appointment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Start Time</label>
        <input
          type="datetime-local"
          value={start.toISOString().slice(0, 16)}
          onChange={(e) => setStart(new Date(e.target.value))}
          required
        />
        <label>End Time</label>
        <input
          type="datetime-local"
          value={end.toISOString().slice(0, 16)}
          onChange={(e) => setEnd(new Date(e.target.value))}
          required
        />
        <div className="modal-actions">
          <button onClick={handleSave}>{isEditing ? 'Update' : 'Save'}</button>
          {isEditing && (
            <button onClick={() => onDelete(appointment.id)}>Delete</button>
          )}
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;