import axios from './api' // 导出 api

/* 请求接口文件
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独导出

// 获取所有文章列表
export const listAllArticle = params => {
  return axios({
    url: '/api/article/list',
    method: 'get',
    params
  })
}
// 通过文章id获取文章
export const getArticleById = params => {
  return axios({
    url: '/api/article/' + params.id,
    method: 'get'
  })
}
// 获取最新的几篇文章
export const listLastestArticle = params => {
  return axios({
    url: '/api/article/list/lastest',
    method: 'get',
    params
  })
}
// 获取所有分类
export const listAllCategory = params => {
  return axios({
    url: '/api/category/list',
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
// 获取所有留言
export const listAllComment = params => {
  return axios({
    url: '/api/comment/list',
    method: 'get',
    params
  })
}
// 登录
export const doLogin = data => {
  return axios({
    url: '/login/do_login',
    method: 'post',
    data
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
  updateArticle,
  listLastestArticle,
  listAllCategory,
  listAllComment,
  getArticleById,
  doLogin
}
