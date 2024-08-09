/*
 * @Author: wanziwen
 * @Date: 2024-08-09 13:51:36
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-09 13:51:49
 * @Description: 
 * @FilePath: /my-app-ts/craco.config.js
 */
const path = require('path')

module.exports = {
    webpack : {
        alias : { //别名配置
            '@' : path.resolve(__dirname,'src')
        }
    }
}