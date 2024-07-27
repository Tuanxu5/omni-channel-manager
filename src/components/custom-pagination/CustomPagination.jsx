import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Pagination, Typography } from "antd";
import { useState } from "react";
import { CustomSelect } from "../custom-select/CustomSelect";
import "./index.scss";

export const CustomPagination = ({ total }) => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <LeftOutlined />;
    }
    if (type === "next") {
      return <RightOutlined />;
    }
    return originalElement;
  };

  const handleChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, total);

  return (
    <div className="pagination-wrapper">
      <div className="pagination-total">
        <Typography.Text>{`Showing ${startItem} to ${endItem} of ${total} entries`}</Typography.Text>
        <CustomSelect
          options={[
            { value: 5, label: "5 / page" },
            { value: 10, label: "10 / page" },
            { value: 15, label: "15 / page" },
            { value: 20, label: "20 / page" },
          ]}
          defaultValue={10}
          onChange={value => handleChange(currentPage, value)}
          height={32}
        />
      </div>
      <Pagination
        className="pagination-custom"
        total={total}
        pageSize={pageSize}
        current={currentPage}
        onChange={handleChange}
        itemRender={itemRender}
      />
    </div>
  );
};
