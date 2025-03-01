import { useEffect, useState, useMemo, useCallback } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Dropdown, Breadcrumb } from "antd";
const { Header, Sider, Content } = Layout;
import "./BasicLayout.less";
import Logo from "@/assets/react.svg";
import myRoutes from "@/router/routes";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useStore from "@/store/theme";

const BasicLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const themeStore = useStore();
  const { t, i18n } = useTranslation();
  const [breadcrumbs, setBreadcrumbs] = useState([t("home")]);
  const navigate = useNavigate();
  const location = useLocation();

  // 使用 useMemo 初始化 menusMap
  const menusMap = useMemo(() => ({}), []);

  const getMenus = useCallback(
    (routes) => {
      return routes
        .map((item) => {
          if (item.hideInMenu) return false;
          let menu = {
            key: item.path,
            icon: item.icon?.render() || "",
            label: item.i18n ? t(item.i18n) : item.name,
          };
          menusMap[menu.key] = menu.label;
          if (item.children) {
            menu.children = getMenus(item.children);
          }
          return menu;
        })
        .filter((item) => item);
    },
    [t, menusMap]
  );

  const menus = useMemo(
    () => getMenus(myRoutes.find((item) => item.path === "/")?.children || []),
    [getMenus]
  );

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/workbench", { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    let breadcrumbNames = pathnames
      .map((_, index) => {
        const key = `/${pathnames.slice(0, index + 1).join("/")}`;
        return menusMap[key];
      })
      .filter((x) => x);
    if (breadcrumbNames.length === 1) {
      breadcrumbNames.unshift(t("home"));
    }
    setBreadcrumbs(breadcrumbNames);
  }, [location, menusMap, t]);

  const handleChangeLanguage = (val) => {
    themeStore.setLocalLanguage(val);
  };

  useEffect(() => {
    if (themeStore.localLanguage) {
      i18n.changeLanguage(themeStore.localLanguage);
    }
  }, [i18n, themeStore.localLanguage]);

  // 退出登录
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
          selectedKeys={[location.pathname]}
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
            backgroundColor: "#fff",
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
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
          <div
            style={{
              marginRight: "36px",
            }}
          >
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: (
                      <Button type="link" onClick={() => navigate("/setting")}>
                        个人设置
                      </Button>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <Button type="link" onClick={() => logout()}>
                        退出登录
                      </Button>
                    ),
                  },
                ],
              }}
            >
              <UserOutlined className="dropdown-icon" />
            </Dropdown>
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: (
                      <Button
                        type="link"
                        onClick={() => handleChangeLanguage("zhCN")}
                      >
                        中文
                      </Button>
                    ),
                  },
                  {
                    key: "2",
                    label: (
                      <Button
                        type="link"
                        onClick={() => handleChangeLanguage("enUS")}
                      >
                        English
                      </Button>
                    ),
                  },
                ],
              }}
            >
              <GlobalOutlined className="dropdown-icon" />
            </Dropdown>
          </div>
        </Header>
        <Content className="ant-layout-content">
          <div className="content-header">
            <Breadcrumb
              items={
                breadcrumbs.length > 0 &&
                breadcrumbs.map((title, index) => ({
                  key: index,
                  title: title,
                }))
              }
            ></Breadcrumb>
            {breadcrumbs[breadcrumbs.length - 1] || ""}
          </div>
          <div className="content-wrapper">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
