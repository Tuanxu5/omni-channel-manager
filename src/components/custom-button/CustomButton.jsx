import { Button } from "antd";
import "./index.scss";

export const CustomButton = ({ title, type = "default", icon, height = 40, width, ...rest }) => {
  const styleButton = {
    height: `${height}px`,
    width: width,
  };

  return (
    <span className="custom-button" style={{ width: width }}>
      <Button type={type} style={styleButton} {...rest}>
        {icon && icon}
        {title}
      </Button>
    </span>
  );
};
