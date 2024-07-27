import { Input } from "antd";

export const CustomInput = ({ placeholder }) => {
  const styleInput = {
    height: "40px",
    borderRadius: "10px",
  };
  return <Input className="custom-input" placeholder={placeholder} allowClear style={styleInput} />;
};
