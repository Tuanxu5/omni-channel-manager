import { Avatar } from "antd";
import { CustomDropDown } from "../../components/custom-dropdown/CustomDropDown";
import "./index.scss";

export const NavBar = () => {
  return (
    <div className="navbar">
      <span></span>
      <div>
        <CustomDropDown
          component={<Avatar src={"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"} />}
        />
      </div>
    </div>
  );
};
