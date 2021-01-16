import React from "react";
import EditAppointment from "./EditAppointment";
import DeleteAppointment from "./DeleteAppointment";
import moment from "moment";
import helpers from "../services/helpers";
import svgs from "../services/svg";

function Appointment({ appointment, deleteAppointment, updateAppointment }) {
  const specialty = (specialty) => {
    return specialty ? `(${specialty})` : null;
  };
  const symptoms = (symptoms) => {
    return symptoms ? `Symptoms: ${symptoms}` : null;
  };
  const notes = (notes) => {
    return notes ? `Notes: ${notes}` : null;
  };
  return (
    <tr>
      <td>
        {moment(appointment.date).format("dddd, MMMM Do YYYY")} at{" "}
        {helpers.convertTime(appointment.time)}
      </td>
      <td>
        {appointment.doctor}
        <br /> {specialty(appointment.specialty)}
      </td>
      <td>{appointment.patient}</td>
      <td>
        {appointment.location !== null ? (
          appointment.location
        ) : (
          <p className="text-hidden">No</p>
        )}
      </td>
      <td>{appointment.need_insurance ? "Yes" : "No"}</td>
      <td>{appointment.insurance_approval ? "Yes" : "No"}</td>
      <td className="additional-info">
        {notes(appointment.appointment_notes)}
        <br></br>

        <br></br>
        {symptoms(appointment.symptoms)}
        <div className="buttons">
          <EditAppointment
            buttonLabel={svgs.edit}
            className={"Modal"}
            appointment={appointment}
            updateAppointment={updateAppointment}
          />
          <DeleteAppointment
            buttonLabel={svgs.deleteIcon}
            className={"Modal"}
            appointment={appointment}
            deleteAppointment={deleteAppointment}
          />
        </div>
      </td>
    </tr>
  );
}

export default Appointment;
