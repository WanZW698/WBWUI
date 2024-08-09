/*
 * @Author: wanziwen
 * @Date: 2024-08-08 16:17:10
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-08 16:17:35
 * @Description: 
 * @FilePath: /my-app-ts/src/store/reducers/index.ts
 */
import { createSlice } from '@reduxjs/toolkit'

const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    isCollapse: false
  },
  reducers: {
    changeCollapse: state => {
      state.isCollapse = !state.isCollapse
    }
  }
})

export const { changeCollapse } = tabSlice.actions
export default tabSlice.reducer