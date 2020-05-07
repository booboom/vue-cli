/**
 * des:第三方模块导出管理函数
 */
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import qs from 'qs'
import axios from 'axios' // 引入axios
// import FastClick from 'fastclick' // 解决移动端300点击延迟问题
import { post, get, deleteFn, getExcel, postArr, download, putFn } from '../network/request' // 导入封装请求方式
import * as filters from '../utils/fiters'

// import router from '../../../router'
// import { cookie } from 'vux'
// import store from '../../../store/index.js'
Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype.axios = axios // 全局引用
Vue.prototype.$qs = qs // 用来解决Java数据fordate类型的
Vue.prototype.post = post // 全局引用post请求方式
Vue.prototype.get = get
Vue.prototype.postArr = postArr
Vue.prototype.download = download
Vue.prototype.delete = deleteFn
Vue.prototype.put = putFn
Vue.prototype.getExcel = getExcel
// Vue.prototype.cookie = cookie // cookie

Object.keys(filters).forEach(function (k) {
    Vue.filter(k, filters[k])
})
