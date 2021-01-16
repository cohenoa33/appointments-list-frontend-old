import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteAppointment = ({
  buttonLabel,
  className,
  deleteAppointment,
  appointment,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="edit-delete-button" color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Delete Appointment</ModalHeader>
        <ModalBody>
          {appointment.patient}'s appointment for Dr. {appointment.doctor}
          on {appointment.date} at {appointment.time}.<br></br>
          <p>Are you sure you want to delete this appointment?</p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => deleteAppointment(appointment.id)}
          >
            Delete
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteAppointment;
