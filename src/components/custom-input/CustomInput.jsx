import { Input } from "antd";

export const CustomInput = ({ placeholder, height = 40, isPassword = false, ...rest }) => {
  const styleInput = {
    height: `${height}px`,
    borderRadius: "10px",
  };
  if (isPassword) {
    return (
      <Input.Password className="custom-input" placeholder={placeholder} allowClear style={styleInput} {...rest} />
    );
  } else {
    return <Input className="custom-input" placeholder={placeholder} allowClear style={styleInput} {...rest} />;
  }
};
