import React from "react";
import ModalEdit from "./ModalEdit";
import { Button } from "reactstrap";

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
      <>
        <tr>
          <th>{`${index + 1}`}</th>
          <td>
            <ModalEdit
              buttonLabel={"EDIT"}
              className={"Modal"}
              appointment={appointment}
            />
          </td>
          <td>{appointment.date}</td>
          <td>{appointment.time}</td>
          <td>{appointment.doctor}</td>
          <td>{appointment.specialty}</td>
          <td>{appointment.patient}</td>
          <td>{appointment.appointment_notes}</td>
          <td>{appointment.symptoms}</td>
          <td>{appointment.location}</td>
          <td>{appointment.need_insurance ? "Yes" : "No"}</td>
          <td>{appointment.insurance_status}</td>
          <td>{appointment.insurance_approval ? "Yes" : "No"}</td>
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
}
export default Appointment;
