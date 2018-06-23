# 电商秒杀系统前端总结

本项目前端是基于Vue的单页面应用(SPA)

数据驱动是vuejs最大的特点，与我们未完成前后端分离时的页面相比，我们不再需要手动的去修改dom，而只需要关心数据的逻辑处理。

## 对于一些库的依赖

我们使用npm进行包管理：

* 引入axios实现AJAX接口请求
* 引入vue-router进行路由管理

## 路由设计

* / ：主页，展示商品列表
* /login ：登录页面
* /detail/:id ：商品详情页
* /order_detail/:id ： 订单详情页

## 通用组件设计

header组件，判断用户登录状态。
若未登录可跳转到登录页面。

## 对axios进行封装

将axios进行封装并绑定到全局，简化代码编写。

## 几个要点

### cookie跨域丢失问题

axios默认是不携带cookie的，解决这个问题：

1. 把withCredentials设置为true，这里要注意后端也要进行origin的设置，不然浏览器要报错
2. 设置`headers: {'Content-Type': 'application/x-www-form-urlencoded'}`
3. 引入qs并用其处理想要传递的数据

这里暴露的一个问题是，传递的参数将以明文的方式显示。解决该问题，可以将HTTP升级为HTTPS。

### 几个备选方案

本项目后端采用session来记录用户状态，并通过将session储存在Redis保证了分布式系统的session一致性。

RESTful api 的原则是 stateless, 使用 session 和 cookies 会引入 state。因此我们这里还有几个备选方案来记录用户状态。

#### Token

后端实现JWT(JSON Web Token)的创建和校验，前端使用Token进行接口调用。

#### Vuex + localStorage

Vuex虽然能存储状态，但是一旦页面刷新，用户状态也随之刷新消失。
为了使用户状态不会因为刷新而消失，我们可以使用本地存储localStorage。
