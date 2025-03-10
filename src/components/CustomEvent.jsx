import React from 'react';
import { format } from 'date-fns';

const CustomEvent = ({ event }) => {
  return (
    <div className="custom-event">
      <strong>{event.title}</strong>
      <p><strong>Patient:</strong> {event.patientEmail}</p>
      <p><strong>Time:</strong> {format(event.start, 'hh:mm a')}</p>
    </div>
  );
};

export default CustomEvent;