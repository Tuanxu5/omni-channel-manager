import { Col, Row, Table } from "antd";
import { useState } from "react";
import { CustomInput } from "../../../components/custom-input/CustomInput";
import { CustomPagination } from "../../../components/custom-pagination/CustomPagination";
import { CustomSelect } from "../../../components/custom-select/CustomSelect";

import { SvgIcon } from "../../../assets/icons";
import { CustomButton } from "../../../components/custom-button/CustomButton";
import { useTable } from "../../../hooks/sales-channel/list-sales-channel/useTable";
import { CustomListPage } from "../../../layouts/custom-list-page/CustomListPage";

export const ListSalesChannelSection = () => {
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
      title="Sales Channel"
      headerCard={
        <div className="flex-column">
          <Row gutter={[0, 16]} style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            <CustomButton type="primary" title="Import" icon={<SvgIcon.IconImportFile />} />
          </Row>
          <Col span={24}>
            <Row style={{ display: "flex", width: "100%", alignItems: "center" }}>
              <Col span={18}>
                <CustomInput placeholder="Search..." />
              </Col>
              <Col span={1}></Col>
              <Col span={5}>
                <CustomSelect
                  options={[
                    { value: "descending", label: "Descending" },
                    { value: "ascending", label: "Ascending" },
                  ]}
                  placeholder="Order By"
                  width={"100%"}
                />
              </Col>
            </Row>
          </Col>
        </div>
      }
      contentCard={
        <>
          <Table columns={columns} dataSource={data} pagination={false} rowSelection={rowSelection} size="large" />
          <CustomPagination total={data?.length} />
        </>
      }
    />
  );
};
