# axios 的二次封装

[Vue二次封装axios为插件使用](https://juejin.im/post/5ae432aaf265da0b9c1063c8)
参照此篇博文进行封装，修正了文章中一些小问题，经测试可使用。

[axios官方文档](https://github.com/axios/axios/tree/98080381fa78dcffa91a15e6d25617583d13e533)

## 基本的封装要求

* 统一 url 配置
* 统一 api 请求
* request (请求)拦截器，例如：带上token等，设置请求头
* response (响应)拦截器，例如：统一错误处理，页面重定向等
* 根据需要，结合 Vuex 做全局的loading动画，或者错误处理
* 将 axios 封装成 Vue 插件使用

## 文件结构

src 文件夹下：
* http : 封装 axios 模块的文件夹
  * config.js : axios 的默认配置
  * api.js : 二次封装axios，拦截器等
  * interface.js : 请求接口文件
  * index.js : 将axios封装成插件
  
## 使用
在 main.js 中做如下操作：
```vue
// 导入 http 文件夹下的 index.js
import api from './http/index'
Vue.use(api)
// 此时可以直接在 Vue 原型上调用 $api 了
```

封装好后，在需要ajax的地方直接调用
```vue
this.$api.接口名({请求参数}).then(successCallback).catch(failedCallback)
```

之后所有 api 请求统一放在 http 文件夹 interface.js 中统一管理

接口样式，重写`return axios({})`部分的内容即可。
```vue
export const listAllArticle = params => {
  return axios({
    url: '/api/article/list',
    method: 'get',
    params
  })
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
