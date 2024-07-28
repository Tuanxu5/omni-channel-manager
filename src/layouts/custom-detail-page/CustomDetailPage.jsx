import { Col, Row } from "antd";
import { CustomTitle } from "../../components/custom-title/CustomTitle";
import "./index.scss";

export const CustomDetailPage = ({ title, actionButton, contentCard }) => {
  return (
    <Col span={24} className="custom-list-page">
      <Row>
        <div className="flex-center-between">
          <CustomTitle title={title}></CustomTitle>
          {actionButton}
        </div>
      </Row>
      <div className="content-page">
        <div className="content-card">{contentCard}</div>
      </div>
    </Col>
  );
};
