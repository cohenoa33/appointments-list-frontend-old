import React from "react";

import {
  Button,
  ModalBody,
  Modal,
  ModalHeader,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class AppointmentForm extends React.Component {
  state = {
    modal: false,
    time: "",
    date: "",
    specialty: "",
    patient: "",
    appointment_notes: "",
    symptoms: "",
    location: "",
    need_insurance: "",
    insurance_status: "",
    insurance_approval: "",
    insurance_notes: "",
  };
  toggle = () => this.setState({ modal: !this.state.modal });

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let appointment = this.state;
    this.props.addAppointment(appointment);
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
              <FormGroup row>
                <Label for="date" sm={2}>
                  Date
                </Label>
                <Col sm={10}>
                  <Input type="date" name="date" id="date" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="time" sm={2}>
                  Time
                </Label>
                <Col sm={10}>
                  <Input
                    type="time"
                    name="time"
                    id="time"
                    placeholder="10:00 AM"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="doctor" sm={2}>
                  Doctor Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="string"
                    name="doctor"
                    id="doctor"
                    placeholder="Doctor Name"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="specialty" sm={2}>
                  Doctor Specialty
                </Label>
                <Col sm={10}>
                  <Input
                    type="string"
                    name="specialty"
                    id="specialty"
                    placeholder="Doctor Specialty"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="patient" sm={2}>
                  Patient Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="string"
                    name="patient"
                    id="patient"
                    placeholder="Patient Name"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="appointment_notes" sm={2}>
                  Appointment Notes
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="appointment_notes"
                    id="appointment_notes"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="symptoms" sm={2}>
                  Symptoms
                </Label>
                <Col sm={10}>
                  <Input type="textarea" name="symptoms" id="symptoms" />
                </Col>
              </FormGroup>
              <FormGroup row>
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
              </FormGroup>

              <FormGroup>
                <Label for="location">Location</Label>
                <Input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Address"
                />
              </FormGroup>

              <FormGroup row>
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
              </FormGroup>
              <FormGroup row>
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
              </FormGroup>

              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button onClick={this.handleSubmit}>Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default AppointmentForm;
