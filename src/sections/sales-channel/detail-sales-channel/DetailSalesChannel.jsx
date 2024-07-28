import { Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../../assets/icons";
import { CustomButton } from "../../../components/custom-button/CustomButton";
import { CustomInput } from "../../../components/custom-input/CustomInput";
import { CustomSelect } from "../../../components/custom-select/CustomSelect";
import { CustomDetailPage } from "../../../layouts/custom-detail-page/CustomDetailPage";
import "./index.scss";

export const DetailSalesChannelSection = () => {
  const options = [
    {
      label: "Primary",
      value: "Primary",
    },
    {
      label: "Warning",
      value: "Warning",
    },
    {
      label: "Info",
      value: "Info",
    },
    {
      label: "Dart",
      value: "Dart",
    },
  ];

  return (
    <div className="sales-channel-detail-page">
      <CustomDetailPage
        title="Sales Channel Detail"
        isMoreColumn
        actionButton={
          <div style={{ display: "flex", gap: "12px" }}>
            <Link to={"/sales-channel"}>
              <CustomButton title="Back" type="default" />
            </Link>
            <CustomButton title="Save" type="primary" icon={<SvgIcon.IconImportFile />} />
          </div>
        }
        contentLeft={
          <div className="block-card">
            <Row>
              <Typography.Text strong>Domain</Typography.Text>
              <CustomInput placeholder="Enter Domain" />
            </Row>
            <Row style={{ display: "flex", gap: "2%" }}>
              <div style={{ width: "49%" }}>
                <Typography.Text strong>Api key</Typography.Text>
                <CustomInput placeholder="Enter Api key" />
              </div>
              <div style={{ width: "49%" }}>
                <Typography.Text strong>Api Token</Typography.Text>
                <CustomInput placeholder="Enter Api Token" />
              </div>
            </Row>
          </div>
        }
        contentRight={
          <div className="block-card">
            <Row>
              <Typography.Text strong>Status</Typography.Text>
              <CustomSelect placeholder="Enter Status" options={options} width="100%" />
            </Row>
            <Row>
              <Typography.Text strong>Platform</Typography.Text>
              <CustomSelect placeholder="Enter Platform" options={options} width="100%" />
            </Row>
            <Row>
              <Typography.Text strong>Assign User</Typography.Text>
              <CustomSelect placeholder="Enter Assign User" options={options} width="100%" />
            </Row>
          </div>
        }
      />
    </div>
  );
};
