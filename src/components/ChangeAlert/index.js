import React from "react";
import { withStoraListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo un cambio</p>
        <button onClick={() => toggleShow(false)}>Refrescar</button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStoraListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
