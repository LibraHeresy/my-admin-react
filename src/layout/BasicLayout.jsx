import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
import "./BasicLayout.less";
import Logo from "@/assets/react.svg";
import myRoutes from '@/router/routes'

const BasicLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log(myRoutes)
  const getMenus = (routes) => {
    return routes.map((item) => {
      if(item.hideInMenu) return false;
      let menu = {
        key: item.path,
        icon: item.icon?.render() || '',
        label: item.name,
      }
      if(item.children) {
        menu.children = getMenus(item.children)
      }
      return menu;
    }).filter(item => item);
  };

  const menus = getMenus(myRoutes);

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
          defaultSelectedKeys={["1"]}
          items={menus}
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
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
