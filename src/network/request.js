/* eslint-disable */
/**
 * des:请求封装
 */
import axios from 'axios'
import qs from 'qs'
import { Loading } from 'element-ui'
let loading
//全局设置请求的方式和地址
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = '/api';
// axios.defaults.withCredentials = true; // 跨域带cookies

function startLoading() {
    loading = Loading.service({
        lock: true,
        // text: '正在从云端获取数据……',
        background: 'rgba(0, 0, 0, 0.8)'
    })
}

function endLoading() {
    setTimeout(() => {
        loading.close()
    }, 100)
}

// 不做统一loading的接口
let loadingNo = [
    '/drag/getBusinessUnitList',
    '/drag/getLegionList',
    '/drag/getQuantumList'
]

axios.interceptors.request.use(function (config) { //拦截器
    if (loadingNo.indexOf(config.url) === -1) {
        startLoading();
    }
    return config;
}, function (error) {
    setTimeout(() => {
        endLoading();
    }, 500)
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //拦截器
    endLoading();
    const { status, data } = response
    if (status === 200) {
        // 对请求回来的数据进行同意处理
        const { code = 200 } = data
        if (code !== 200) {

        }
    }
    return response;
}, function (error) {
    endLoading();
    const { response: { status } } = error
    if (status === 401) window.location.reload()
    return Promise.reject(error.message || error.response.data);
});

const post = function (url, data = null, that) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: qs.stringify(data),
            cancelToken: new axios.CancelToken(function executor(c) { // 设置 cancel token
                if (that) {
                    that.source = c;
                }
            })
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err);
        })
    })
};
const get = function (url, data = null) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            params: data
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err);
        })
    })
}
const deleteFn = function (url) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'delete',
            url: url,
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err);
        })
    })
}
const getExcel = function (url, data = null, method) {
    return new Promise((resolve, reject) => {
        axios({
            method: method || 'post',
            responseType: 'blob',
            url: url,
            [`${method === 'get' ? 'params' : 'data'}`]: method === 'get' ? data : qs.stringify(data),
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err);
        })
    })
}

const download = function (url, data = null) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            responseType: 'blob',
            url: url,
            params: data,
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err);
        })
    })
}
const postArr = function (url, data = null, that) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: qs.stringify(data, { arrayFormat: 'brackets' }),
            cancelToken: new axios.CancelToken(function executor(c) { // 设置 cancel token
                if (that) {
                    that.source = c;
                }
            })
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err);
        })
    })
}

const putFn = function (url, data = null, that) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'put',
            url: url,
            data: qs.stringify(data),
            cancelToken: new axios.CancelToken(function executor(c) { // 设置 cancel token
                if (that) {
                    that.source = c;
                }
            })
        }).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err);
        })
    })
}

export { post, get, deleteFn, getExcel, postArr, download, putFn }
