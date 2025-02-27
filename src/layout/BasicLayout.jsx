import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
import "./BasicLayout.less";
import Logo from "@/assets/react.svg";
import myRoutes from "@/router/routes";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const getMenus = (routes) => {
    return routes
      .map((item) => {
        if (item.hideInMenu) return false;
        let menu = {
          key: item.path,
          icon: item.icon?.render() || "",
          label: item.name,
        };
        if (item.children) {
          menu.children = getMenus(item.children);
        }
        return menu;
      })
      .filter((item) => item);
  };

  const menus = getMenus(
    myRoutes.find((item) => item.path === "/")?.children || []
  );

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  React.useEffect(() => {
    if (location.pathname === "/") {
      navigate("/workbench", { replace: true });
    }
  }, [location, navigate]);

  return (
    <Layout className="basic-layout">
      <Sider trigger={null} collapsible collapsed={collapsed} width={240}>
        <div className="logo-wrapper">
          <img className="logo" src={Logo} alt="logo" />
          {!collapsed && (
            <div
              className="title"
              style={{
                color: "#fff",
              }}
            >
              My-Admin-React
            </div>
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={menus}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className="ant-layout-content">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
