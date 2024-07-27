import { Col, Row } from "antd";
import { CustomTitle } from "../custom-title/CustomTitle";
import "./index.scss";

export const CustomListPage = ({ title, headerCard, contentCard }) => {
  return (
    <Col span={24} className="custom-list-page">
      <Row>
        <CustomTitle title={title}></CustomTitle>
      </Row>
      <div className="content-page">
        <div>{headerCard}</div>
        <div>{contentCard}</div>
      </div>
    </Col>
  );
};
