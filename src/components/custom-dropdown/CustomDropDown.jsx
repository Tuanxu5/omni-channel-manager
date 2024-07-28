import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const CustomDropDown = ({ component }) => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key === "1") {
      // Perform any logout logic here, if needed
      navigate("/login");
    }
  };

  const items = [
    {
      label: "Log out",
      key: "1",
      icon: <UserOutlined />,
    },
  ];

  return (
    <Dropdown overlay={<Menu onClick={handleMenuClick} items={items} />} trigger={["click"]}>
      {component}
    </Dropdown>
  );
};
