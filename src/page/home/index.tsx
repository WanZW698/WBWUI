/*
 * @Author: wanziwen
 * @Date: 2024-08-08 14:34:47
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-09 14:59:16
 * @Description: 
 * @FilePath: /my-app-ts/src/page/home/index.tsx
 */

import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Table, } from 'antd'
import { ClockCircleOutlined,} from '@ant-design/icons';
import * as Icon from '@ant-design/icons'
import '@/style/css/home/index.css'
import { get, post } from '@/utils/http'
interface Icons {
    color:string,
    value:number,
    name:string
}

export default function Home() {
    const tableData:any = [{
        name: 'oppo',
        todayBuy: 500,
        monthBuy: 3500,
        totalBuy: 22000
      },
      {
        name: 'vivo',
        todayBuy: 300,
        monthBuy: 2200,
        totalBuy: 24000
      },
      {
        name: '苹果',
        todayBuy: 800,
        monthBuy: 4500,
        totalBuy: 65000
      },
      {
        name: '小米',
        todayBuy: 1200,
        monthBuy: 6500,
        totalBuy: 45000
      },
      {
        name: '三星',
        todayBuy: 300,
        monthBuy: 2000,
        totalBuy: 34000
      },
      {
        name: '魅族',
        todayBuy: 350,
        monthBuy: 3000,
        totalBuy: 22000
    }]
    
    const countData:any=[{
        name: '今日支付订单',
        value: 1234,
        icon: 'PayCircleOutlined',
        color: '#33d294'
      },
      {
        name: '今日收藏订单',
        value: 4545,
        icon: 'HeartOutlined',
        color: '#ff6a4d'
      },
      {
        name: '今日未支付订单',
        value: 1234,
        icon: 'CloseCircleOutlined',
        color: '#5ab1ef'
      },
      {
        name: '本月支付订单',
        value: 1234,
        icon: 'PayCircleOutlined',
        color: '#33d294'
      },
      {
        name: '本月收藏订单',
        value: 666,
        icon: 'HeartOutlined',
        color: '#ff6a4d'
      },
      {
        name: '本月未支付订单',
        value: 3423,
        icon: 'CloseCircleOutlined',
        color: '#5ab1ef'
    }]

    const columns = [
        {
          title: '课程',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '今日购买',
          dataIndex: 'todayBuy',
          key: 'todayBuy'
        },
        {
          title: '本月购买',
          dataIndex: 'monthBuy',
          key: 'monthBuy'
        },
        {
          title: '总购买',
          key: 'totalBuy',
          dataIndex: 'totalBuy'
        }
    ]
    return (
        <Row className='home' gutter={20}>
            <Col span={8}>
                <Card hoverable>
                    <div className='user'>
                        <img src={require('../../assets/image/user.webp')}></img>
                        <div className='userInfo'>
                        <p className='name'>Admin</p>
                        <p className='role'>超级管理员</p>
                        </div>
                    </div>
                    <div className='login-info'>
                        <p>
                        上次登录时间：
                        <span>2024-07-17</span>
                        </p>
                        <p>
                        上次登录地点：
                        <span>深圳</span>
                        </p>
                    </div>
                </Card>
                <Card hoverable style={{
                        margin: '10px 0px 0px 0px',
                      }}>
                    <Table columns={columns} dataSource={tableData} pagination={false} rowKey={'name'} />
                </Card>
            </Col>
            <Col span={16}>
                <div className='num'>
                {countData.map((item:Icons, index:number) => {
                    return (
                    <Card key={index} style={{
                        margin: '0px 0px 18px 0px',
                      }}>
                        <div className='icon' style={{ backgroundColor: item.color }}>
                        <ClockCircleOutlined />
                        </div>
                        <div className='desc'>
                        <p className='value'>￥{item.value}</p>
                        <p className='name'>{item.name}</p>
                        </div>
                    </Card>
                    )
                })}
                </div>
                <div></div>
                <div></div>
            </Col>
        </Row>
    )
}