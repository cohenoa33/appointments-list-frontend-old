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
            <label>
              Doctor:
              <input
                type="text"
                name="doctor"
                onChange={handleChange}
                value={newAppointment.doctor}
                required
              />
            </label>
            <label>
              Patient:
              <input
                type="text"
                name="patient"
                onChange={handleChange}
                value={newAppointment.patient}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={newAppointment.date}
                required
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                name="time"
                value={newAppointment.time}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="location"
                value={newAppointment.location}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Need Insurance Approval:
              <input
                name="need_insurance"
                type="checkbox"
                checked={newAppointment.need_insurance ? true : false}
                onChange={handleChange}
                value={newAppointment.need_insurance}
              />
            </label>
            <br />
            <label>
              Approved By Insurance:
              <input
                name="insurance_approval"
                type="checkbox"
                checked={newAppointment.insurance_approval ? true : false}
                onChange={handleChange}
                value={newAppointment.insurance_approval}
              />
            </label>

            <label>
              Specialty:
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
            </label>
            <label>
              Symptoms:
              <input
                type="text"
                name="symptoms"
                onChange={handleChange}
                value={
                  newAppointment.symptoms !== null
                    ? newAppointment.symptoms
                    : ""
                }
              />
            </label>
            <label>
              Notes:
              <input
                type="textarea"
                name="appointment_notes"
                onChange={handleChange}
                value={
                  newAppointment.appointment_notes !== null
                    ? newAppointment.appointment_notes
                    : ""
                }
              />
            </label>
            <label>
              Insurance Notes:
              <input
                type="textarea"
                name="insurance_notes"
                value={
                  newAppointment.insurance_notes !== null
                    ? newAppointment.insurance_notes
                    : ""
                }
                onChange={handleChange}
              />
            </label>
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
