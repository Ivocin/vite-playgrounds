import React from 'react'
import './index.css'
import useRequest from '@ahooksjs/use-request'
import { Table } from 'antd'

export default function User(props) {
  const { data, error, loading } = useRequest('/api/users')

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
  ]
  return (
    <div className="User">
      <Table
        size="small"
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id}
        loading={loading}
      />
    </div>
  )
}
