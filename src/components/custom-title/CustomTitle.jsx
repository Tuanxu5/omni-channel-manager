import { Typography } from "antd";
import "./index.scss";

export const CustomTitle = ({ title }) => {
  return <Typography.Text className="title-page">{title}</Typography.Text>;
};
