import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Layout from './Layout'
import App from '~/pages/app/index'
import User from '~/pages/user/index'
import 'antd/dist/antd.less'

export default function Index() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/app">
          <App />
        </Route>
      </Switch>
    </Router>
  )
}
