import React, { useState } from "react";
import Appointment from "./Appointment";
import { Table } from "reactstrap";
import { sortBy } from "../services/helpers";

export default function Appointments({
  appointments,
  deleteAppointment,
  updateAppointment,
}) {
  const [sort, setSort] = useState("date");

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>
            {" "}
            <button>Date</button>{" "}
          </th>
          <th>Time</th>
          <th>
            <button onClick={() => setSort("doctor")}>Doctor</button>
          </th>
          <th>Address</th>
          <th>Patient Name</th>
          <th>Need Insurance Approval?</th>
          <th>Approved by Insurance?</th>
          <th>Notes</th>
          <th>Doctor Specialty</th>
          <th>Symptoms</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {sortBy(appointments, sort).map((appointment, index) => (
          <Appointment
            appointment={appointment}
            index={index}
            key={appointment.id}
            deleteAppointment={deleteAppointment}
            updateAppointment={updateAppointment}
          />
        ))}
      </tbody>
    </Table>
  );
}
