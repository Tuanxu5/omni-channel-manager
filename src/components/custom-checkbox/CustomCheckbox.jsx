import { Checkbox } from "antd";

export const CustomCheckbox = ({ options, ...rest }) => {
  return (
    <Checkbox.Group options={options} style={{ display: "flex", flexDirection: "column", gap: "8px" }} {...rest} />
  );
};
