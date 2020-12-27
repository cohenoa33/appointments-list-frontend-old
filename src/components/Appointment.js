import React from "react";
import EditAppointment from "./EditAppointment";
import DeleteAppointment from "./DeleteAppointment";
import moment from "moment";

function Appointment({ appointment, deleteAppointment, updateAppointment }) {
  const specialty = (specialty) => {
    return specialty ? `Doctor Specialty: ${specialty}` : null;
  };
  const symptoms = (symptoms) => {
    return symptoms ? `Symptoms: ${symptoms}` : null;
  };
  const notes = (notes) => {
    return notes ? `Notes: ${notes}` : null;
  };
  return (
    <>
      <tr>
        <td>{moment(appointment.date).format("dddd, MMMM Do YYYY")}</td>
        <td>{appointment.time}</td>
        <td>{appointment.doctor}</td>
        <td>{appointment.location}</td>
        <td>{appointment.patient}</td>
        <td>{appointment.need_insurance ? "Yes" : "No"}</td>
        <td>{appointment.insurance_approval ? "Yes" : "No"}</td>
        <td>
          {notes(appointment.appointment_notes)}
          <br></br>
          {specialty(appointment.specialty)}
          <br></br>
          {symptoms(appointment.symptoms)}
          <EditAppointment
            buttonLabel={"EDIT"}
            className={"Modal"}
            appointment={appointment}
            updateAppointment={updateAppointment}
          />
          <DeleteAppointment
            buttonLabel={"DELETE"}
            className={"Modal"}
            appointment={appointment}
            deleteAppointment={deleteAppointment}
          />
        </td>
      </tr>
    </>
  );
}

export default Appointment;
