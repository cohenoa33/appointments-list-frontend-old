import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import svgs from "../services/svg";

export default function Filter({ setFilter }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{svgs.filter}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => setFilter("future")}>
          Next Appointments
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
        <DropdownItem onClick={() => setFilter("all")}>
          All Appointments
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
