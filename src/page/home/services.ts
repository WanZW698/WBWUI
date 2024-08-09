/*
 * @Author: wanziwen
 * @Date: 2024-08-08 17:07:47
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-08 17:49:04
 * @Description: 
 * @FilePath: /my-app-ts/src/page/home/services.ts
 */
import { get, post } from '../../utils/http'

export const getData = async () => {
    return get('http://localhost:3000/api/data')
  }