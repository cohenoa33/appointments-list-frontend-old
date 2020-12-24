import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Appointments({ sortingBy, setFilter }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Sort & Filter</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Sort</DropdownItem>
        <DropdownItem onClick={() => sortingBy("date")}>Date</DropdownItem>
        <DropdownItem onClick={() => sortingBy("doctor")}>Doctor</DropdownItem>
        <DropdownItem onClick={() => sortingBy("patient")}>
          Patient
        </DropdownItem>
        <DropdownItem disabled>Filter</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => setFilter("past_only")}>
          Past Appointments
        </DropdownItem>
        <DropdownItem onClick={() => setFilter("all")}>
          All Appointments
        </DropdownItem>
        <DropdownItem onClick={() => setFilter("need_insurance")}>
          Need Insurance Approval
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
