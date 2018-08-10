import axios from './api' // 导出 api

/* 请求接口文件
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独导出

// 获取文章列表，通过页码，否则返回全部文章
export const listArticle = params => {
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
export const listArticleByCategory = params => {
  return axios({
    url: '/api/article/list/category/' + params.id,
    method: 'get',
    params
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
// 添加一条留言
export const addComment = data => {
  return axios({
    url: '/api/comment',
    method: 'post',
    data
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
    url: 'article',
    method: 'post',
    data
  })
}
// 删除一篇文章
export const deleteArticle = params => {
  return axios({
    url: 'article/' + params.id,
    method: 'delete'
  })
}
// 获取内容为md源码的文章
export const getArticleMD = params => {
  return axios({
    url: 'article/' + params.id,
    method: 'get'
  })
}
// 编辑/更新一篇文章
export const updateArticle = data => {
  return axios({
    url: 'article/' + data.id,
    method: 'put',
    data
  })
}
// 删除一个分类
export const deleteCategory = data => {
  return axios({
    url: 'category/' + data.id,
    method: 'delete'
  })
}
// 增加一个分类
export const addCategory = data => {
  return axios({
    url: 'category',
    method: 'post',
    data
  })
}
// 这个月每天syslog数量
export const getSysLogThisMonth = params => {
  return axios({
    url: 'dataview/thismonth/syslog',
    method: 'get',
    params
  })
}
// 这个月每天syslog数量
export const getSysViewThisMonth = params => {
  return axios({
    url: 'dataview/thismonth/sysview',
    method: 'get',
    params
  })
}
// sysView详情表
export const getSysViewTable = params => {
  return axios({
    url: '/sys/view',
    method: 'get',
    params
  })
}
// sysLog详情表
export const getSysLogTable = params => {
  return axios({
    url: '/sys/log',
    method: 'get',
    params
  })
}

// 默认全部倒出
// 根绝需要进行
export default {
  listArticle,
  listArticleByCategory,
  addArticle,
  deleteArticle,
  updateArticle,
  listLastestArticle,
  listAllCategory,
  listAllComment,
  getArticleById,
  doLogin,
  deleteCategory,
  addCategory,
  getArticleMD,
  getSysLogThisMonth,
  getSysViewThisMonth,
  addComment,
  getSysViewTable,
  getSysLogTable
}
