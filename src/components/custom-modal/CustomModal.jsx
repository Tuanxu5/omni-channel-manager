import { Modal } from "antd";
import React, { useState } from "react";
import { CustomButton } from "../custom-button/CustomButton";
import "./index.scss";

const CustomModal = ({ component, title, loading, content, ...rest }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <span onClick={showModal}>{component}</span>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <CustomButton type="cancel" key="back" onClick={handleCancel} title="Cancel" />,
          <CustomButton key="submit" type="primary" loading={loading} onClick={handleOk} title="Update" />,
        ]}
        className="custom-modal"
        {...rest}
      >
        {content}
      </Modal>
    </div>
  );
};
export default CustomModal;
