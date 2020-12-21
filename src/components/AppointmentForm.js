import React from "react";

import {
  Button,
  ModalBody,
  Modal,
  ModalHeader,
  Col,
  Row,
  Form,
  InputGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";

class AppointmentForm extends React.Component {
  state = {
    modal: false,
    appointment: {
      time: "",
      date: "",
      specialty: "",
      patient: "",
      appointment_notes: "",
      symptoms: "",
      location: "",
      need_insurance: true,
      insurance_status: "",
      insurance_approval: true,
      insurance_notes: "",
      user_id: "",
    },
  };
  toggle = () =>
    this.setState({
      modal: !this.state.modal,
      appointment: { ...this.state.appointment, user_id: this.props.user_id },
    });

  handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    let newAppointment = this.state.appointment;

    if (name === "need_insurance" || value === "insurance_approval") {
      value === "yes" ? (value = true) : (value = false);
      this.setState({
        appointment: {
          ...newAppointment,
          [name]: value,
        },
      });
    } else {
      this.setState({
        appointment: {
          ...newAppointment,
          [name]: value,
        },
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let appointment = this.state.appointment;
    this.props.addAppointment(appointment);
    this.clearState();
  };

  clearState = () => {
    this.setState({
      modal: false,
    });
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
            <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <Row form>
                <InputGroup row>
                  <Label for="date" sm={2}>
                    Date
                  </Label>
                  <Col sm={10}>
                    <Input type="date" name="date" id="date" />
                  </Col>
                </InputGroup>
                <InputGroup row>
                  <Label for="time" sm={2}>
                    Time
                  </Label>

                  <Col sm={10}>
                    <Input type="time" name="time" id="time" required />
                  </Col>
                </InputGroup>
              </Row>
              <InputGroup row>
                <Label for="patient" sm={2}>
                  Patient
                </Label>
                <Col sm={10}>
                  <Input
                    type="string"
                    name="patient"
                    id="patient"
                    placeholder="Patient Name"
                  />
                </Col>
              </InputGroup>
              <InputGroup row>
                <Label for="doctor" sm={2}>
                  Doctor
                </Label>
                <Col sm={10}>
                  <Input
                    type="string"
                    name="doctor"
                    id="doctor"
                    required
                    placeholder="Doctor Name"
                  />
                </Col>
              </InputGroup>
              <InputGroup row>
                <Label for="specialty" sm={2}>
                  Specialty
                </Label>
                <Col sm={10}>
                  <Input
                    type="string"
                    name="specialty"
                    id="specialty"
                    placeholder="Doctor Specialty"
                  />
                </Col>
              </InputGroup>

              <InputGroup>
                <Label for="location">Address</Label>
                <Input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Address"
                />
              </InputGroup>
              <InputGroup row>
                <Label for="appointment_notes" sm={2}>
                  Notes
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="appointment_notes"
                    id="appointment_notes"
                  />
                </Col>
              </InputGroup>

              <InputGroup row>
                <Label for="symptoms" sm={2}>
                  Symptoms
                </Label>
                <Col sm={10}>
                  <Input type="textarea" name="symptoms" id="symptoms" />
                </Col>
              </InputGroup>

              <InputGroup row>
                <Label for="need_insurance" sm={2}>
                  Need Insurance Approval
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    name="need_insurance"
                    id="need_insurance"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </Input>
                </Col>
              </InputGroup>

              <InputGroup row>
                <Label for="insurance_approval" sm={2}>
                  Approved By Insurance?
                </Label>
                <Col sm={10}>
                  <Input
                    type="select"
                    name="insurance_approval"
                    id="insurance_approval"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </Input>
                </Col>
              </InputGroup>
              <InputGroup row>
                <Label for="insurance_notes" sm={2}>
                  Insurance Notes
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="insurance_notes"
                    id="insurance_notes"
                  />
                </Col>
              </InputGroup>
              <InputGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button onClick={this.handleSubmit}>Submit</Button>
                </Col>
              </InputGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default AppointmentForm;
