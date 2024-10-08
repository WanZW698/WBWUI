/*
 * @Author: wanziwen
 * @Date: 2024-08-08 14:29:03
 * @LastEditors: wanziwen
 * @LastEditTime: 2024-08-09 14:41:31
 * @Description: 
 * @FilePath: /my-app-ts/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/css/index.css';
import App from './page/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
