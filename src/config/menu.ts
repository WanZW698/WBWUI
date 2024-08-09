/*
 * @Author: wanziwen
 * @Date: 2024-08-08 14:59:35
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-08 16:07:19
 * @Description: 
 * @FilePath: /my-app-ts/src/config/menu.ts
 */
const menuList = [
    {
      path: '/home',
      name: 'home',
      label: '首页',
      icon: 'HomeOutlined',
      url: '/home/index'
    },
    {
      path: '/mail',
      name: 'mail',
      label: '商品管理',
      icon: 'ShopOutlined',
      url: '/mail/index'
    },
    {
      path: '/user',
      name: 'user',
      label: '用户管理',
      icon: 'UserOutlined',
      url: '/user/index'
    }
  ]
  export default menuList
  