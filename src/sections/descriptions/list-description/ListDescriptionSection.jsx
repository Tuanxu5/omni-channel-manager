import { Col, Row, Table } from "antd";
import { useState } from "react";
import { CustomButton } from "../../../components/custom-button/CustomButton";
import { CustomDatePicker } from "../../../components/custom-date-picker/CustomDatePicker";
import { CustomInput } from "../../../components/custom-input/CustomInput";
import { CustomListPage } from "../../../components/custom-list-page/CustomListPage";
import { CustomPagination } from "../../../components/custom-pagination/CustomPagination";
import { CustomPopover } from "../../../components/custom-popover/CustomPopover";
import { CustomSelect } from "../../../components/custom-select/CustomSelect";
import { useTable } from "../../../hooks/descriptions/list-description/useTable";

export const ListDescriptionSection = () => {
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
      title="Descriptions"
      headerCard={
        <div className="flex-column">
          <Col span={24}>
            <Row style={{ display: "flex", width: "100%", alignItems: "center" }}>
              <Col span={18}>
                <CustomInput placeholder="Search..." />
              </Col>
              <Col span={6} style={{ display: "flex", justifyContent: "end", gap: "8px" }}>
                <CustomSelect
                  options={[
                    { value: "descending", label: "Descending" },
                    { value: "ascending", label: "Ascending" },
                  ]}
                  defaultValue="descending"
                />
                <CustomPopover
                  title={
                    <div className="flex-center-between">
                      <div>Filter</div>
                      <CustomButton title="Save" type="primary" height={32} />
                    </div>
                  }
                  content={
                    <Col span={24} style={{ width: "400px", display: "flex", flexDirection: "column", gap: "16px" }}>
                      <Col span={24}>
                        <Row>
                          <span>Creation Date</span>
                        </Row>
                        <Row>
                          <div className="flex-center-between" style={{ gap: "20px" }}>
                            <div className="flex-center-between" style={{ gap: "8px" }}>
                              <span style={{ fontSize: "12px" }}>From</span>
                              <CustomDatePicker />
                            </div>
                            <div className="flex-center-between" style={{ gap: "8px" }}>
                              <span style={{ fontSize: "12px" }}>To</span>
                              <CustomDatePicker />
                            </div>
                          </div>
                        </Row>
                      </Col>
                      <Col span={24}>
                        <Row>
                          <span>Sales Channel</span>
                        </Row>
                        <Row>
                          <CustomInput placeholder="Potake.com" />
                        </Row>
                      </Col>
                    </Col>
                  }
                  component={<CustomButton title="Filter" type="default" />}
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
