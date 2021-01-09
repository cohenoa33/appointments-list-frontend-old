import React, { useState } from "react";
import { Alert } from "reactstrap";

export default function AlertMessage({ color, text }) {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  debugger;
  return (
    <Alert color={color} isOpen={visible} toggle={onDismiss}>
      {text}
    </Alert>
  );
}
