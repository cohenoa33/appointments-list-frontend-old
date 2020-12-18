import React from "react";

class Appointment extends React.Component {
  state = {
    isUpdate: false,
    appointment: {},
  };

  toggleIsUpdate = () => {
    this.setState({ isUpdate: !this.state.isUpdate });
  };

  render() {
    const {
      appointment,
      index,
      deleteAppointment,
      updateAppointment,
    } = this.props;

    return (
      <tr key={`${index}+${appointment.id}`}>
        {this.state.isUpdate ? (
          <>
            <td onClick={() => this.toggleIsUpdate()}>Save</td>
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
          </>
        ) : (
          <>
            <td onClick={() => this.toggleIsUpdate()}></td>
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
          </>
        )}
      </tr>
    );
  }
}
export default Appointment;
