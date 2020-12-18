import React from "react";
import Appointment from "./Appointment";

export default function Appointments() {
  return (
    <div>
      <div>Appointments</div>
      <table>
        <thead>
          <tr>
            <th>update</th>
            <th>Date</th>
            <th>Time</th>
            <th>appointment_notes</th>
            <th>specialty</th>
            <th>patient</th>
            <th>symptoms</th>
            <th>location</th>
            <th>need_insurance</th>
            <th>insurance_status</th>
            <th>insurance_approval</th>
            <th>insurance_notes</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.appointments.map((appointment, index) => (
            <Appointment
              appointment={appointment}
              index={index}
              key={appointment.id}
              deleteAppointment={this.props.deleteAppointment}
              updateAppointment={this.props.updateAppointment}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
