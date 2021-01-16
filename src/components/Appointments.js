import React, { useState, useEffect } from "react";
import Appointment from "./Appointment";
import Filter from "./Filter";
import Sort from "./Sort";
import helpers from "../services/helpers";
import moment from "moment";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}
export default function Appointments({
  appointments,
  deleteAppointment,
  updateAppointment,
}) {
  const [sort, setSort] = useState("date");
  const [isSort, setIsSort] = useState({ date: true });
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
    if (fieldName === "insurance_done")
      return array.filter(
        (app) => app.insurance_approval === true && app.need_insurance === true
      );
    if (fieldName === "past_only")
      return array.filter((app) => {
        return moment(app.date, "YYYY/MM/DD").isBefore(moment()) ? app : null;
      });
    if (fieldName === "future")
      return array.filter((app) => {
        return !moment(app.date, "YYYY/MM/DD").isBefore(moment()) ? app : null;
      });
    return array;
  };
  const displayFilter = (filter) => {
    if (filter === "need_insurance") return "Need Insurance Approval";
    if (filter === "insurance_done") return "Approved by Insurance";
    if (filter === "past_only") return "Archive Appointments";
    if (filter === "future") return "Next Appointments";
    if (filter === "all") return "All Appointments";
  };

  appointments = helpers.sortBy(
    filterBy(appointments, filter),
    sort,
    isSort[`${sort}`]
  );

  return (
    <div>
      <div>
        <h1>{displayFilter(filter)}</h1>
        <div className="filter">
          {useWindowDimensions().width > 760 ? (
            <Filter sortingBy={sortingBy} setFilter={setFilter} />
          ) : (
            <Sort sortingBy={sortingBy} setFilter={setFilter} />
          )}
        </div>
      </div>
      <div>
        <table className=" table-hover">
          <thead>
            <tr className="table-info">
              <th>
                <button
                  className={sort === "date" ? "sorting" : "hidden-button"}
                  onClick={() => sortingBy("date")}
                >
                  Date
                </button>
              </th>
              <th>
                <button
                  className={sort === "doctor" ? "sorting" : "hidden-button"}
                  onClick={() => sortingBy("doctor")}
                >
                  Doctor
                </button>
              </th>
              <th>
                <button
                  className={sort === "patient" ? "sorting" : "hidden-button"}
                  onClick={() => sortingBy("patient")}
                >
                  Patient Name
                </button>
              </th>
              <th>Address</th>
              <th>
                <button
                  className={
                    sort === "insurance_approval" ? "sorting" : "hidden-button"
                  }
                  onClick={() => sortingBy("insurance_approval")}
                >
                  Need Insurance Approval?
                </button>
              </th>

              <th>Approved by Insurance?</th>
              <th>Additional Information</th>
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
