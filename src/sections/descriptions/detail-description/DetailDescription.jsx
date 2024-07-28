import { Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../../assets/icons";
import { CustomButton } from "../../../components/custom-button/CustomButton";
import { CustomCheckbox } from "../../../components/custom-checkbox/CustomCheckbox";
import { CustomInput } from "../../../components/custom-input/CustomInput";
import { CustomDetailPage } from "../../../layouts/custom-detail-page/CustomDetailPage";

export const DetailDescriptionSection = () => {
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

  const handleAddSubCate = () => {};

  return (
    <CustomDetailPage
      title="Categories Detail"
      actionButton={
        <div style={{ display: "flex", gap: "12px" }}>
          <Link to={"/categories"}>
            <CustomButton title="Back" type="default" />
          </Link>
          <CustomButton title="Save" type="primary" icon={<SvgIcon.IconImportFile />} />
        </div>
      }
      contentCard={
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Row>
            <Typography.Text strong>Name</Typography.Text>
            <CustomInput placeholder="Enter Name" />
          </Row>
          <Row>
            <Typography.Text strong>Subcategories</Typography.Text>
            <div style={{ width: "100%" }}>
              <CustomCheckbox options={options} />
            </div>
            <div onClick={() => handleAddSubCate()}>Add new</div>
          </Row>
        </div>
      }
    />
  );
};
