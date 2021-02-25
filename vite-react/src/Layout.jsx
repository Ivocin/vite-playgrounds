import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <Menu selectedKeys="App" mode="horizontal">
      <Menu.Item key="App">
        <Link to="/app">App</Link>
      </Menu.Item>
    </Menu>
  );
}
