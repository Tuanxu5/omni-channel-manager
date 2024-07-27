import { StepForwardOutlined } from "@ant-design/icons";
import { Col, Input, Row, Table, Tag } from "antd";
import { useState } from "react";
import { CustomButton } from "../../../components/custom-button/CustomButton";
import { CustomDatePicker } from "../../../components/custom-date-picker/CustomDatePicker";
import { CustomInput } from "../../../components/custom-input/CustomInput";
import { CustomListPage } from "../../../components/custom-list-page/CustomListPage";
import CustomModal from "../../../components/custom-modal/CustomModal";
import { CustomPagination } from "../../../components/custom-pagination/CustomPagination";
import { CustomPopover } from "../../../components/custom-popover/CustomPopover";
import { CustomSelect } from "../../../components/custom-select/CustomSelect";
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
        <div className="flex-column">
          <Row gutter={[0, 16]} style={{ display: "flex", justifyContent: "space-between" }}>
            <CustomModal
              component={<CustomButton type="primary" title="Sync Product" icon={<StepForwardOutlined />} />}
              title={"Bulk Edit Product"}
              width={550}
              content={
                <Col span={24}>
                  <Row>
                    <Col span={8}>Apply</Col>
                    <Col span={16}>
                      <div>To selected product</div>
                      <div>To all from the filtered results</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>Add Categories</Col>
                    <Col span={16}>
                      <Input placeholder="Search Categories" />
                      <div>
                        <Tag>Tag 1</Tag>
                        <Tag>Tag 1</Tag>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>Remove Categories</Col>
                    <Col span={16}>
                      <Input placeholder="Search Categories" />
                      <div>
                        <Tag>Tag 1</Tag>
                        <Tag>Tag 1</Tag>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>New owner</Col>
                    <Col span={16}>
                      <Input placeholder="Tùng Trần" />
                    </Col>
                  </Row>
                </Col>
              }
            />
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <CustomButton title="Edit Selected" type="secondary" />
              <CustomButton title="Delete" type="cancel" />
            </div>
          </Row>
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
                          <span>Categories</span>
                        </Row>
                        <Row>
                          <CustomSelect width={"100%"} />
                        </Row>
                      </Col>
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
                          <span>Owner</span>
                        </Row>
                        <Row>
                          <CustomInput placeholder="Tùng Trần" />
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
          <CustomPagination total={13} />
        </>
      }
    />
  );
};
