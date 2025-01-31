import Alert from "@/components/informs/alert/alert";
import Confirm from "@/components/informs/confirm/confirm";
import Warning from "@/components/informs/warning/warning";
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

  setTimeout(() => {
    root.unmount();
    handleClose(alertElement);
  }, 5000);
}

export function alertSuccess(message: string) {
  createAlert("success", message);
}

export function alertError(message: string) {
  createAlert("error", message);
}

export function alertWarning(message: string) {
  const alertWarningContainer = document.getElementById("alert-warning");

  if (!alertWarningContainer) {
    console.error("Div 'alert-warning' não encontrada.");
    return;
  }

  const handleClose = (alertElement: HTMLElement) => {
    alertWarningContainer.removeChild(alertElement);
  };

  const alertElement = document.createElement("div");
  alertWarningContainer.appendChild(alertElement);

  const root = createRoot(alertElement);
  root.render(
    <Warning
      text={message}
      onClose={() => {
        root.unmount();
        handleClose(alertElement);
      }}
    />
  );
}

export async function confirmAction(
  message: string,
  buttonText: string,
  buttonColor: "red" | "blue"
): Promise<boolean> {
  return new Promise((resolve) => {
    const confirmContainer = document.getElementById("confirm-container");

    if (!confirmContainer) {
      console.error("Div 'confirm-container' não encontrada.");
      resolve(false);
      return;
    }

    const confirmElement = document.createElement("div");
    confirmContainer.appendChild(confirmElement);

    const root = createRoot(confirmElement);

    const handleClose = (result: boolean) => {
      root.unmount();
      confirmContainer.removeChild(confirmElement);
      resolve(result);
    };

    root.render(
      <Confirm
        text={message}
        buttonText={buttonText}
        buttonColor={buttonColor}
        onClose={() => handleClose(false)} 
        action={() => handleClose(true)}
      />
    );
  });
}

export function openLoading(){
  const element = document.getElementById("custom-loading");
  if(element){
    element.style.display = "flex";
  }
}

export function closeLoading(){
  const element = document.getElementById("custom-loading");
  if(element){
    element.style.display = "none";
  }
}
