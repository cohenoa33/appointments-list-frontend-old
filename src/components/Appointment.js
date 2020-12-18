import React from "react";

export default function Appointment({
  appointment,
  index,
  deleteAppointment,
  updateAppointment,
}) {
  return (
    <tr key={`${index}+${appointment.id}`}>
      <td onClick={() => updateAppointment(appointment)}>update </td>
      <td>{appointment.date}</td>
      <td>{appointment.time}</td>
      <td>{appointment.appointment_notes}</td>
      <td>{appointment.specialty}</td>
      <td>{appointment.patient}</td>
      <td>{appointment.symptoms}</td>
      <td>{appointment.location}</td>
      <td>{appointment.need_insurance}</td>
      <td>{appointment.insurance_status}</td>
      <td>{appointment.insurance_approval}</td>
      <td>{appointment.insurance_notes}</td>
      <td onClick={() => deleteAppointment(appointment.id)}>delete</td>
    </tr>
  );
}
