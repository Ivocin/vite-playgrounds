import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="user">
        <Link to="/user">User</Link>
      </Menu.Item>
      <Menu.Item key="app">
        <Link to="/app">App</Link>
      </Menu.Item>
    </Menu>
  )
}
