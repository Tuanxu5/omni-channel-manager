import { Col, Form, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/custom-button/CustomButton";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { notifyError, notifySuccess } from "../../components/custom-notify/CustomNotify";
import { passwordValidator } from "../../utils/validator";
import "./index.scss";

export const LoginSection = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleLogin = async () => {
    await form
      .validateFields()
      .then(values => {
        if (values?.username === "admin" && values?.password === "Honganh@123") {
          navigate("/");
          notifySuccess("Login thành công");
        } else {
          notifyError("Login thất bại", "Tài khoản hoặc mật khẩu không đúng. Xin vui lòng thử lại");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Col className="login-page">
      <Form form={form} initialValues={{ remember: true }} autoComplete="off" onKeyDown={handleKeyDown}>
        <div className="card-login">
          <Row>
            <Typography.Text className="title">Login</Typography.Text>
          </Row>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <CustomInput placeholder="Enter Username" height={48} />
          </Form.Item>

          <Form.Item name="password" rules={[{ validator: passwordValidator }]}>
            <CustomInput placeholder="Enter Password" height={48} type="password" isPassword />
          </Form.Item>
          <Row>
            <div className="button-login">
              <CustomButton type="primary" title="Login" onClick={() => handleLogin()} width="100%" height={48} />
            </div>
          </Row>
        </div>
      </Form>
    </Col>
  );
};
