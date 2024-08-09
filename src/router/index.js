/*
 * @Author: wanziwen
 * @Date: 2024-08-08 14:34:12
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-08 16:12:19
 * @Description: 
 * @FilePath: /my-app-ts/src/router/index.js
 */
import { createBrowserRouter,Navigate } from 'react-router-dom'
import Layout from '../layout'
import Home from '../page/home'
import Mail from '../page/mail'
import User from '../page/user'

const routes = [
  {
    path: '/',
    Component: Layout,
    children: [
        {
            path: '/',
            element:<Navigate to='home' replace />
        },
        {
            path: 'home',
            Component: Home
        },
        {
            path: 'mail',
            Component: Mail
        },
        {
            path:'user',
            Component: User
        }
    ]
  }
]

export default createBrowserRouter(routes)
