import React from "react";

import { Button, ModalBody, Modal, ModalHeader, ModalFooter } from "reactstrap";

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
              <div className="col-25">
                <label>Doctor</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="doctor"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="col-25">
                <label>Specialty\Type</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="specialty"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-25">
                <label>Patient</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="patient"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="col-25">
                <label>Date</label>
              </div>
              <div className="col-75">
                <input
                  type="date"
                  name="date"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <br />
              <div className="col-25">
                <label>Time</label>
              </div>
              <div className="col-75">
                <input
                  type="time"
                  name="time"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="col-25">
                <label>Address</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="location"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <br />
              <div className="col-25">
                <label>Symptoms</label>
              </div>
              <div className="col-75">
                <textarea
                  type="text"
                  name="symptoms"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-25">
                <label>Additional Information</label>
              </div>
              <div className="col-75">
                <textarea
                  type="text"
                  name="appointment_notes"
                  onChange={this.handleChange}
                />
              </div>
              <div className="center-100">
                <label>
                  Need Insurance Approval
                  <input
                    name="need_insurance"
                    type="checkbox"
                    checked={this.state.appointment.need_insurance}
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Approved By Insurance
                  <input
                    name="insurance_approval"
                    type="checkbox"
                    checked={this.state.appointment.insurance_approval}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Add Appointment
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default AppointmentForm;
