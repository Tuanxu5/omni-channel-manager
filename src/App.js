import { MinusOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import { NavBar } from "./layouts/navbar/navbar";
import ErrorPage from "./pages/ErrorPage";

const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Catalogs", "1", "", [
    getItem(<Link to="/">Products</Link>, "2", <MinusOutlined />),
    getItem(<Link to="/descriptions">Descriptions</Link>, "3", <MinusOutlined />),
    getItem(<Link to="/categories">Categories</Link>, "4", <MinusOutlined />),
  ]),
];

const router = [
  {
    path: "/",
    element: <div>products</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/descriptions",
    element: <div>descriptions</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/categories",
    element: <div>categories</div>,
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout-page">
      <Sider theme="light" width="300" collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo-sidebar">
          <span>Omni Channel Manager</span>
        </div>
        <Menu defaultSelectedKeys={["2"]} defaultOpenKeys={["1"]} mode="inline" items={items} />
      </Sider>
      <Layout>
        <NavBar></NavBar>
        <Content className="content-layout-page">
          <Routes>
            {router?.map(item => {
              return <Route path={item?.path} element={item?.element} errorElement={item?.errorElement} />;
            })}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
