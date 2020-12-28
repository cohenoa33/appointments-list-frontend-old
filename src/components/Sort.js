import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Sort({ sortingBy, setFilter }) {
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
        <DropdownItem onClick={() => sortingBy("insurance_approval")}>
          Need Insurance Approval
        </DropdownItem>
        <DropdownItem disabled>Filter</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => setFilter("all")}>
          All Appointments
        </DropdownItem>
        <DropdownItem onClick={() => setFilter("future")}>
          Future Appointments
        </DropdownItem>
        <DropdownItem onClick={() => setFilter("past_only")}>
          Archive
        </DropdownItem>
        <DropdownItem onClick={() => setFilter("need_insurance")}>
          Need Insurance Approval
        </DropdownItem>
        <DropdownItem onClick={() => setFilter("insurance_done")}>
          Approved by Insurance
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
