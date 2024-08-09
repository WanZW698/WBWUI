/*
 * @Author: wanziwen
 * @Date: 2024-08-08 15:08:04
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-09 13:39:26
 * @Description: 
 * @FilePath: /my-app-ts/src/components/header/index.tsx
 */
import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button,Layout,} from 'antd'

const { Header, Sider, Content } = Layout
export default function MyHeader(props:any) {
  const { collapsed, setCollapsed } = props
  return (
    <Header style={{
        padding: 0,
        background:"#fff"
      }}>
      <Button
        type='text'
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 32,
        }}
      />
    </Header>
  )
}
