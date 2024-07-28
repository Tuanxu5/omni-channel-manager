import { Col, Row } from "antd";
import { CustomTitle } from "../../components/custom-title/CustomTitle";
import "./index.scss";

export const CustomListPage = ({ title, headerCard, contentCard }) => {
  return (
    <Col span={24} className="custom-list-page">
      <Row>
        <CustomTitle title={title}></CustomTitle>
      </Row>
      <div className="content-page">
        <div className="header-card">{headerCard}</div>
        <div className="content-card">{contentCard}</div>
      </div>
    </Col>
  );
};
