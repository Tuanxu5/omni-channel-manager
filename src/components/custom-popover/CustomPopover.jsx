import { Popover } from "antd";
import { useState } from "react";

export const CustomPopover = ({ component, title, content }) => {
  const [open, setOpen] = useState(false);
  // const hide = () => {
  //   setOpen(false);
  // };
  const handleOpenChange = newOpen => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={content}
      title={title}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement="bottomRight"
    >
      <div>{component}</div>
    </Popover>
  );
};
