import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Filter({ setFilter }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Filter</DropdownToggle>
      <DropdownMenu>
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
