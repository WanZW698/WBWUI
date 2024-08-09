/*
 * @Author: wanziwen
 * @Date: 2024-08-08 14:29:03
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-09 14:41:10
 * @Description: 
 * @FilePath: /my-app-ts/src/page/App.tsx
 */
import { RouterProvider } from 'react-router-dom'
import router from '@/router'

export default function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}