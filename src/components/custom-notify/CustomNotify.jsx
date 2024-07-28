import { notification } from "antd";

const openNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export const notifyInfo = (message, description) => openNotification("info", message, description);
export const notifySuccess = (message, description) => openNotification("success", message, description);
export const notifyWarning = (message, description) => openNotification("warning", message, description);
export const notifyError = (message, description) => openNotification("error", message, description);
