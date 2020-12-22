import React from "react";

import { Button, ModalBody, Modal, ModalHeader } from "reactstrap";

class AppointmentForm extends React.Component {
  state = {
    modal: false,
    appointment: {
      need_insurance: true,
      insurance_approval: false,
    },
  };
  toggle = () =>
    this.setState({
      modal: !this.state.modal,
      appointment: { ...this.state.appointment, user_id: this.props.user_id },
    });

  handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    let name = e.target.name;
    let newAppointment = this.state.appointment;

    this.setState({
      appointment: {
        ...newAppointment,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let appointment = this.state.appointment;
    this.props.addAppointment(appointment);
    this.toggle();
  };

  render() {
    return (
      <>
        <Button color="info" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New Appointment</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              <label>
                Doctor:
                <input
                  type="text"
                  name="doctor"
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Patient:
                <input
                  type="text"
                  name="patient"
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Time:
                <input
                  type="time"
                  name="time"
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="location"
                  onChange={this.handleChange}
                  required
                />
              </label>
              <label>
                Need Insurance Approval:
                <input
                  name="need_insurance"
                  type="checkbox"
                  checked={this.state.appointment.need_insurance}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Approved By Insurance:
                <input
                  name="insurance_approval"
                  type="checkbox"
                  checked={this.state.appointment.insurance_approval}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Specialty:
                <input
                  type="text"
                  name="specialty"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Symptoms:
                <input
                  type="text"
                  name="symptoms"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Notes:
                <input
                  type="textarea"
                  name="appointment_notes"
                  onChange={this.handleChange}
                />
              </label>

              <br />
              <input type="submit" value="Save" />
            </form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default AppointmentForm;
