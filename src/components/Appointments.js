import React, { useState } from "react";
import Appointment from "./Appointment";
import { Table, Button } from "reactstrap";
import helpers from "../services/helpers";

export default function Appointments({
  appointments,
  deleteAppointment,
  updateAppointment,
}) {
  const [sort, setSort] = useState("date");
  const [isSort, setIsSort] = useState({ date: false });

  const sortingBy = (fieldName) => {
    setSort(fieldName);
    if (isSort[`${fieldName}`] === false) {
      setIsSort({ [`${fieldName}`]: true });
    } else {
      setIsSort({ [`${fieldName}`]: false });
    }
  };

  appointments =
    isSort[`${sort}`] === false
      ? helpers.sortBy(appointments, sort)
      : helpers.reverseSort(appointments, sort);
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>
            {" "}
            <Button onClick={() => sortingBy("date")}>Date</Button>{" "}
          </th>
          <th>Time</th>
          <th>
            <Button onClick={() => sortingBy("doctor")}>Doctor</Button>
          </th>
          <th>Address</th>
          <th>
            {" "}
            <Button onClick={() => sortingBy("patient")}>Patient Name</Button>
          </th>
          <th>Need Insurance Approval?</th>
          <th>Approved by Insurance?</th>
          <th>Notes</th>
          <th>Doctor Specialty</th>
          <th>Symptoms</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
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
