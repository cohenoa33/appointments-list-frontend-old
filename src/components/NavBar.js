import React from "react";
import { ButtonToggle, Navbar, Nav, NavItem } from "reactstrap";
import AppointmentForm from "./AppointmentForm";

const NavBar = ({ user, logout, addAppointment }) => {
  const renderAppointmentForm = (id, addAppointment) => (
    <AppointmentForm
      addAppointment={addAppointment}
      buttonLabel={"Add New Appointment"}
      className={"Modal"}
      user_id={id}
    />
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        {/* <NavbarBrand href="/">MY APPOINTMENTS</NavbarBrand> */}
        <Nav className="mr-auto" navbar>
          <NavItem> {renderAppointmentForm(user.id, addAppointment)}</NavItem>
        </Nav>
        <ButtonToggle color="light" onClick={logout}>
          Logout
        </ButtonToggle>
      </Navbar>
    </div>
  );
};

export default NavBar;
