import { message, Button, Space } from "antd";

export const error = (msg) => {
  message.error(msg);
};

export const warning = (msg) => {
  message.warning(msg);
};

export const success = (msg) => {
  message.success(msg);
};
