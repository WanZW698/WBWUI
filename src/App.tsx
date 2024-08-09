/*
 * @Author: wanziwen
 * @Date: 2024-08-08 14:29:03
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-08 16:12:29
 * @Description: 
 * @FilePath: /my-app-ts/src/App.tsx
 */
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App