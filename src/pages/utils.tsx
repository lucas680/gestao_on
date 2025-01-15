import Alert from "@/components/informs/alert/alert";
import React from "react";
import { createRoot } from "react-dom/client";

let alertsQueue: HTMLElement[] = [];
const MAX_ALERTS = 5;

function createAlert(type: "success" | "error", message: string) {
  const alertsContainer = document.getElementById("alerts-container");

  if (!alertsContainer) {
    console.error("Div 'alerts-container' não encontrada.");
    return;
  }

  if (alertsQueue.length == MAX_ALERTS) {
    alertsQueue.forEach((alert) => {
      const alertRoot = createRoot(alert);
      alertRoot.unmount();
      alertsContainer.removeChild(alert);
    });
    alertsQueue = [];
  }

  const handleClose = (alertElement: HTMLElement) => {
    alertsContainer.removeChild(alertElement);
    alertsQueue = alertsQueue.filter((item) => item !== alertElement);
  };

  const alertElement = document.createElement("div");
  alertsContainer.appendChild(alertElement);

  const root = createRoot(alertElement);
  root.render(
    <Alert
      text={message}
      type={type}
      onClose={() => {
        root.unmount();
        handleClose(alertElement);
      }}
    />
  );

  alertsQueue.push(alertElement);
}

export function alertSuccess(message: string) {
  createAlert("success", message);
}

export function alertError(message: string) {
  createAlert("error", message);
}
