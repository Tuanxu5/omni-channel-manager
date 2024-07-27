import { Button } from "antd";
import "./index.scss";

export const CustomButton = ({ title, type = "default", icon }) => {
  return (
    <span className="custom-button">
      <Button type={type}>
        {icon && icon}
        {title}
      </Button>
    </span>
  );
};
