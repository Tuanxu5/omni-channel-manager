import { StepForwardOutlined } from "@ant-design/icons";
import { Col, Input, Row, Select, Table } from "antd";
import { useState } from "react";
import { CustomButton } from "../../../components/custom-button/CustomButton";
import { CustomListPage } from "../../../components/custom-list-page/CustomListPage";
import { CustomPagination } from "../../../components/custom-pagination/CustomPagination";
import { useTable } from "../../../hooks/products/list-product/useTable";

export const ListProductSection = () => {
  const { data, columns } = useTable();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = newSelectedRowKeys => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <CustomListPage
      title="Products"
      headerCard={
        <Col span={24}>
          <Row gutter={[0, 16]} style={{ display: "flex", justifyContent: "space-between" }}>
            <CustomButton type="primary" title="Sync Product" icon={<StepForwardOutlined />} />
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <CustomButton title="Edit Selected" />
              <CustomButton title="Delete" />
            </div>
          </Row>
          <Col span={24}>
            <Row gutter={[24]} style={{ display: "flex", width: "100%", alignItems: "baseline" }}>
              <Col span={18}>
                <Input placeholder="Basic usage" />
              </Col>
              <Col span={6} style={{ display: "flex", justifyItems: "end" }}>
                <Select
                  defaultValue="descending"
                  style={{ minWidth: "200px" }}
                  options={[
                    { value: "descending", label: "Descending" },
                    { value: "ascending", label: "Ascending" },
                  ]}
                />
              </Col>
            </Row>
          </Col>
        </Col>
      }
      contentCard={
        <>
          <Table columns={columns} dataSource={data} pagination={false} rowSelection={rowSelection} />
          <CustomPagination total={1} />
        </>
      }
    />
  );
};
