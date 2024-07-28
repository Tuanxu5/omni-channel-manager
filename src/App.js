import { MinusOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { NavBar } from "./layouts/navbar/navbar";
import { CategoriesPages } from "./pages/CategoriesPage";
import { DescriptionsPage } from "./pages/DescriptionsPage";
import ErrorPage from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { ProductsPages } from "./pages/ProductsPage";

const { Content, Sider } = Layout;

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

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const getDefaultSelectedKey = pathname => {
    switch (pathname) {
      case "/":
        return "2";
      case "/descriptions":
        return "3";
      case "/categories":
        return "4";
      default:
        return "2";
    }
  };

  return (
    <Layout className="layout-page">
      <Sider theme="light" width="300" collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo-sidebar">
          <span>Omni Channel Manager</span>
        </div>
        <Menu
          defaultSelectedKeys={[getDefaultSelectedKey(location.pathname)]}
          defaultOpenKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <NavBar />
        <Content className="content-layout-page">
          <Routes>
            <Route path="/" element={<ProductsPages />} />
            <Route path="/descriptions" element={<DescriptionsPage />} />
            <Route path="/categories" element={<CategoriesPages />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
