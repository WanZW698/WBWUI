/*
 * @Author: wanziwen
 * @Date: 2024-08-08 16:17:03
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-08 16:17:59
 * @Description: 
 * @FilePath: /my-app-ts/src/store/index.ts
 */
import { configureStore } from '@reduxjs/toolkit'
import TabReducer from './reducers/index'

export default configureStore({
  reducer: {
    tab: TabReducer
  }
})