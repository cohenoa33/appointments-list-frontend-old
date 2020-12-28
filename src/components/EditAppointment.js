import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditAppointment = ({
  buttonLabel,
  className,
  appointment,
  updateAppointment,
}) => {
  const [modal, setModal] = useState(false);
  const [newAppointment, setNewAppointment] = useState(appointment);

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setNewAppointment({ ...newAppointment, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAppointment(newAppointment);
    toggle();
  };

  return (
    <div>
      <Button color="info" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Appointment</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="center-100">
              <label>Need Insurance Approval</label>
              <input
                name="need_insurance"
                type="checkbox"
                checked={newAppointment.need_insurance ? true : false}
                onChange={handleChange}
                value={newAppointment.need_insurance}
              />

              <br />
              <label>Approved By Insurance</label>
              <input
                name="insurance_approval"
                type="checkbox"
                checked={newAppointment.insurance_approval ? true : false}
                onChange={handleChange}
                value={newAppointment.insurance_approval}
              />
            </div>
            <br />
            <div className="col-25">
              <label>Doctor</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="doctor"
                onChange={handleChange}
                value={newAppointment.doctor}
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
                onChange={handleChange}
                value={
                  newAppointment.specialty !== null
                    ? newAppointment.specialty
                    : ""
                }
              />
            </div>
            <div className="col-25">
              <label>Patient</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="patient"
                onChange={handleChange}
                value={newAppointment.patient}
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
                onChange={handleChange}
                value={newAppointment.date}
                required
              />
            </div>
            <div className="col-25">
              <label>Time</label>
            </div>
            <div className="col-75">
              <input
                type="time"
                name="time"
                value={newAppointment.time}
                onChange={handleChange}
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
                value={newAppointment.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-25">
              <label>Symptoms</label>
            </div>
            <div className="col-75">
              <textarea
                type="text"
                name="symptoms"
                onChange={handleChange}
                value={
                  newAppointment.symptoms !== null
                    ? newAppointment.symptoms
                    : ""
                }
              />
            </div>
            <div className="col-25">
              <label>Additional Information</label>
            </div>
            <div className="col-75">
              <textarea
                type="textarea"
                name="appointment_notes"
                onChange={handleChange}
                value={
                  newAppointment.appointment_notes !== null
                    ? newAppointment.appointment_notes
                    : ""
                }
              />
            </div>

            <br />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Save Changes
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditAppointment;
