/*
  ajax请求函数模块
 */
import axios from "axios"

export default function ajax (url='', data={}, type='GET') {
  return new promise(function (resolve, reject) {
    let promise;

    if (type === 'GET') {
      // 准备url query参数
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      // 成功返回数据
      resolve(response.data)
    }).catch(error => {
      // 失败
      reject(error)
    })
  })
}