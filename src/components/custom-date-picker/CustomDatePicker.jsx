import { DatePicker } from "antd";
import { dateFormatMDY } from "../../utils/constant";

export const CustomDatePicker = () => {
  const styleDatePicker = {
    height: "40px",
    borderRadius: "10px",
    width: "100%",
  };
  return <DatePicker format={dateFormatMDY} style={styleDatePicker} />;
};
