import React from "react";
import EditAppointment from "./EditAppointment";
import DeleteAppointment from "./DeleteAppointment";
import moment from "moment";

function Appointment({ appointment, deleteAppointment, updateAppointment }) {
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
        <td>{appointment.appointment_notes}</td>
        <td>{appointment.specialty}</td>
        <td>{appointment.symptoms}</td>
        <td>
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
