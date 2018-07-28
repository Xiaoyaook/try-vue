import axios from './api' // 导出 api

/* 请求接口文件
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独导出
// 下面分别给出一个get,post,delete,put的示例
// 获取所有文章列表
export const listAllArticle = params => {
  return axios({
    url: '/api/article/list',
    method: 'get',
    params
  })
}
// 获取某一个分类下的所有文章
export const listAllArticleByCategory = params => {
  return axios({
    url: '/api/article/list/category/' + params,
    method: 'get'
  })
}
// 增加一篇文章
export const addArticle = data => {
  return axios({
    url: '/admin/article',
    method: 'post',
    data
  })
}
// 删除一篇文章
export const deleteArticle = params => {
  return axios({
    url: '/admin/article/' + params,
    method: 'delete'
  })
}
// 编辑/更新一篇文章
export const updateArticle = data => {
  return axios({
    url: '/admin/article/' + data.id,
    method: 'put',
    data
  })
}

// 默认全部倒出
// 根绝需要进行
export default {
  listAllArticle,
  listAllArticleByCategory,
  addArticle,
  deleteArticle,
  updateArticle
}
