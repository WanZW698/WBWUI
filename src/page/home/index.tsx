/*
 * @Author: wanziwen
 * @Date: 2024-08-08 14:34:47
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-09 08:55:05
 * @Description: 
 * @FilePath: /my-app-ts/src/page/home/index.tsx
 */

import React, { useEffect, useState } from 'react'
import { Col, Row, Card, Table,Button, Layout, Avatar, } from 'antd'
import { ClockCircleOutlined, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';

import * as Icon from '@ant-design/icons'
import './index.css'
import { getData } from './services'
import { get, post } from '../../utils/http'
interface Icons {
    color:string,
    value:number,
    name:string
}

const Home = () => {
    const [tableData, setTableData] = useState([])
    const [countData, setCountData] = useState([])
    const [homeData, setHomeData] = useState({})
    useEffect(() =>{
        getList()
        getOrder()
    },[])
    // const iconToElement = (name:keyof typeof Icon) => React.createElement(Icon[name])
    // 获取卖商品
    const getList = () => {
        // 本地跑了一个node接口测试数据展示
        get('http://localhost:3000/api/data').then(res => {
            let {data} = res.data
            setTableData(data)
        }).catch(err => {
            console.log("err的值")
        })
    }
    // 获取订单列表
    const getOrder = () => {
        get('http://localhost:3000/api/list').then(res => {
            console.log("res.data",res)
            setCountData(res.data.data)
        }).catch(err => {
            console.log("err的值")
        })
    }

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
    // const iconToElement = (name:string) => React.createElement(Icon[name])
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
                {countData.map((item:Icons, index) => {
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
export default Home