import React from "react";
import ModalEdit from "./ModalEdit";
import { Button } from "reactstrap";

function Appointment({
  appointment,
  index,
  deleteAppointment,
  updateAppointment,
}) {
  return (
    <>
      <tr>
        <th>
          {`${index + 1}`}
          <ModalEdit
            buttonLabel={"EDIT"}
            className={"Modal"}
            appointment={appointment}
            updateAppointment={updateAppointment}
          />
        </th>
        <td>{appointment.date}</td>
        <td>{appointment.time}</td>
        <td>{appointment.patient}</td>
        <td>{appointment.doctor}</td>
        <td>{appointment.location}</td>
        <td>{appointment.need_insurance ? "Yes" : "No"}</td>
        <td>{appointment.insurance_approval ? "Yes" : "No"}</td>
        <td>{appointment.specialty}</td>
        <td>{appointment.appointment_notes}</td>
        <td>{appointment.symptoms}</td>
        <td>{appointment.insurance_notes}</td>
        <td>
          <Button
            onClick={() => deleteAppointment(appointment.id)}
            color="danger"
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}

export default Appointment;
