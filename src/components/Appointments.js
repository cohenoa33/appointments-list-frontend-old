import React, { useState } from "react";
import Appointment from "./Appointment";
import SortFilter from "./SortFilter";
import { Table } from "reactstrap";
import helpers from "../services/helpers";
import moment from "moment";

export default function Appointments({
  appointments,
  deleteAppointment,
  updateAppointment,
}) {
  const [sort, setSort] = useState("date");
  const [isSort, setIsSort] = useState({ date: false });
  const [filter, setFilter] = useState("future");

  const sortingBy = (fieldName) => {
    setSort(fieldName);
    if (isSort[`${fieldName}`] === false) {
      setIsSort({ [`${fieldName}`]: true });
    } else {
      setIsSort({ [`${fieldName}`]: false });
    }
  };
  const filterBy = (array, fieldName) => {
    if (fieldName === "need_insurance")
      return array.filter(
        (app) => app.insurance_approval === false && app.need_insurance === true
      );
    if (fieldName === "past_only")
      return array.filter((app) => {
        if (moment(app.date, "YYYY/MM/DD").isBefore(moment())) {
          return app;
        }
      });
    if (fieldName === "future")
      return array.filter((app) => {
        if (!moment(app.date, "YYYY/MM/DD").isBefore(moment())) {
          return app;
        }
      });
    return array;
  };

  appointments = helpers.sortBy(
    filterBy(appointments, filter),
    sort,
    isSort[`${sort}`]
  );

  return (
    <div>
      <SortFilter sortingBy={sortingBy} setFilter={setFilter} />
      <br />
      <div>
        <table className=" table-hover">
          <thead>
            <tr className="table-info">
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Address</th>
              <th>Patient Name</th>
              <th>Need Insurance Approval?</th>
              <th>Approved by Insurance?</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <Appointment
                appointment={appointment}
                key={appointment.id}
                deleteAppointment={deleteAppointment}
                updateAppointment={updateAppointment}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
