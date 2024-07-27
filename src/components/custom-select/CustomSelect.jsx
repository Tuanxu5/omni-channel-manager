import { Select } from "antd";
import "./index.scss";

export const CustomSelect = ({ placeholder, options, height = 40, width, ...rest }) => {
  const styleSelect = {
    height: `${height}px`,
    width: width,
  };

  return <Select className="custom-select" placeholder={placeholder} style={styleSelect} options={options} {...rest} />;
};
