import axios from './api' // 导出 api

/* 请求接口文件
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独导出
export const listAllArticle = params => {
  return axios({
    url: '/api/article/list',
    method: 'get',
    params
  })
}

export const listAllArticleByCategory = params => {
  return axios({
    url: '/api/article/list/sort/' + params,
    method: 'get'
  })
}

export const addArticle = data => {
  return axios({
    url: '/admin/article',
    method: 'post',
    data
  })
}

// 默认全部倒出
// 根绝需要进行
export default {
  listAllArticle,
  listAllArticleByCategory,
  addArticle
}
