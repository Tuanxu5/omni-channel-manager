import { Col, Row } from "antd";
import { CustomTitle } from "../../components/custom-title/CustomTitle";
import "./index.scss";

export const CustomDetailPage = ({
  title,
  actionButton,
  contentCard,
  isMoreColumn = false,
  contentLeft,
  contentRight,
  ...rest
}) => {
  return (
    <Col span={24} className="custom-list-page">
      <Row>
        <div className="flex-center-between">
          <CustomTitle title={title}></CustomTitle>
          {actionButton}
        </div>
      </Row>
      {isMoreColumn ? (
        <div className="content-more-page">
          <div className="content-left-page">{contentLeft}</div>
          <div className="content-right-page">{contentRight}</div>
        </div>
      ) : (
        <div className="content-single-page">
          <div className="content-card">{contentCard}</div>
        </div>
      )}
    </Col>
  );
};
