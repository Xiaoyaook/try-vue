import Qs from 'qs'
// 配置API接口地址
let root = 'http://localhost:8080'
// 引用axios
let axios = require('axios')
// // 自定义判断元素类型JS
// function toType (obj) {
//   return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
// }
// // 参数过滤函数
// function filterNull (o) {
//   for (let key in o) {
//     if (o[key] === null) {
//       delete o[key]
//     }
//     if (toType(o[key]) === 'string') {
//       o[key] = o[key].trim()
//     } else if (toType(o[key]) === 'object') {
//       o[key] = filterNull(o[key])
//     } else if (toType(o[key]) === 'array') {
//       o[key] = filterNull(o[key])
//     }
//   }
//   return o
// }

/*
  接口处理函数
*/

function apiAxios (method, url, params, success, failure) {
  // if (params) {
  //   params = filterNull(params)
  // }
  let data = Qs.stringify(params)
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? data : null,
    params: method === 'GET' || method === 'DELETE' ? data : null,
    baseURL: root,
    // 设置这个Content-Type,在文件top处引入qs,并用qs处理params才能成功把数据传到后端
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    withCredentials: true // 默认false,设置为true可以解决cookie跨域丢失问题,这里要注意后端也要进行origin的设置
  })
    .then(function (res) {
      if (res.code === 0) {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data)
        } else {
          window.alert('error: ' + JSON.stringify(res.msg))
        }
      }
    })
    .catch(function (err) {
      let res = err.response
      if (err) {
        window.alert('api error, HTTP CODE: ' + res.status)
      }
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
