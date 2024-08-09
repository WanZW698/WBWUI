import React, { useState } from 'react'
import * as Icon from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import menuList from '../../config/menu'
import { useNavigate } from 'react-router-dom'
import {DiffOutlined} from '@ant-design/icons'
const { Sider } = Layout

export default function Aside(props:any) {
  const { collapsed } = props
  const navigate = useNavigate()
  //菜单数据处理
  const getItems = (items:any, list = []) => {
    items.map((item:any) => {
        let obj ={key:item.path,label: item.label,icon: <DiffOutlined />}
        list.push(obj as never)
    })
    return list
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <h3 className='app-name'>Admin</h3>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={getItems(menuList)}
        style={{
          height: '100%'
        }}
        onClick={(e) => navigate(e.key)}
      />
    </Sider>
  )
}
