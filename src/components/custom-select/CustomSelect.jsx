import { Select } from "antd";
import "./index.scss";

export const CustomSelect = ({ placeholder, options, width = 40, ...rest }) => {
  const styleSelect = {
    height: `${width}px`,
  };

  return <Select className="custom-select" placeholder={placeholder} style={styleSelect} options={options} {...rest} />;
};
