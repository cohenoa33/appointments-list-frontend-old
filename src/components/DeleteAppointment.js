import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

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
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          {appointment.patient}'s appointment for Dr. {appointment.doctor}
          on {appointment.date} at {appointment.time}
          <br></br>
          Are you sure you want to delete this appointment?
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => deleteAppointment(appointment.id)}
          >
            Yes
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteAppointment;
