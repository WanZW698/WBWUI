/*
 * @Author: wanziwen
 * @Date: 2024-08-08 14:49:19
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-09 09:29:31
 * @Description: 
 * @FilePath: /my-app-ts/src/page/mail/index.tsx
 */
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
interface DataType {
    key: string;
    name: string;
    money: number;
    address: string;
    tags: string[];
}

const data: DataType[] = [
    {
      key: '1',
      name: '铅笔',
      money: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: '圆珠笔',
      money: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: '钢笔',
      money: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: '铅笔',
        money: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '5',
        name: '圆珠笔',
        money: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '6',
        name: '钢笔',
        money: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '7',
        name: '铅笔',
        money: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '8',
        name: '圆珠笔',
        money: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '9',
        name: '钢笔',
        money: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
];
const columns: TableProps<DataType>['columns'] = [
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '商品价格',
      dataIndex: 'money',
      key: 'money',
    },
    {
      title: '商品数量',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
];
const Mail = () => {
  return <Table columns={columns} dataSource={data} />
}
export default Mail