import { Button } from "antd";
import "./index.scss";

export const CustomButton = ({ title, type = "default", icon, height = 40, ...rest }) => {
  const styleButton = {
    height: `${height}px`,
  };

  return (
    <span className="custom-button">
      <Button type={type} style={styleButton} {...rest}>
        {icon && icon}
        {title}
      </Button>
    </span>
  );
};
