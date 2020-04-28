import axios from 'axios'
var apiRoot = process.env.API_ROOT
console.log(apiRoot)
var CancelToken = axios.CancelToken;
var cancel;

axios.defaults.headers.common['channel'] = 'landingPage'
axios.defaults.headers.common['source'] = 'h5'

export default {
	get: function (path, params) {
        return new Promise((resolve, reject) => {
            axios({
                url: path,
                method: 'GET',
                params: params,
                cancelToken: new CancelToken(function executor(c) {
                    cancel = c;
                })
            })
            .then(function (response) {
                if (response.data.code === 200) {
                    var data = response.data.data
                    resolve(data)
                } else {
                    reject(response.data)
                }
            })
            .catch(function (thrown) {
                //非主动cancel的情况下
                if (!axios.isCancel(thrown)) { console.log('请求失败') }
            })
        })
    },
	//一般post
    post: function (path, params) {
        return new Promise((resolve, reject) => {
            axios({
                url: path,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(params),
                cancelToken: new CancelToken(function executor(c) {
                    cancel = c;
                })
            })
            .then(function (response) {
                if (response.data.code === 200) {
                    var data = response.data.data
                    resolve(data)
                } else {
                    reject(response.data)
                }
            })
            .catch(function (thrown) {
                console.log(2222)
                reject(thrown)
                //非主动cancel的情况下
                // if (!axios.isCancel(thrown)) { console.log('请求失败') }
            })
        })
    },
    //blink日志
    blink: function (path, params) {
        return new Promise(() => {
            axios({
                url: path,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'source': 'h5',
                    'channel': params.channel,
                    'uid': localStorage.getItem('sessionId')
                },
                params: params,
                cancelToken: new CancelToken(function executor(c) {
                    cancel = c;
                })
            })
            .then(function () {

            })
            .catch(function (thrown) {
                //非主动cancel的情况下
                if (!axios.isCancel(thrown)) { console.log('请求失败') }
            })
        })
    },
    //form表单post
    post_form: function (path, params) {
        return new Promise((resolve, reject) => {
            axios({
                url: path,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                cancelToken: new CancelToken(function executor(c) {
                    cancel = c;
                }),
                data: params,
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
            })
            .then(function (response) {
                if (response.data.code === 200) {
                    var data = response.data.data
                    resolve(data)
                } else {
                    reject(response.data)
                }
            })
            .catch(function (thrown) {
                // console.log('请求失败')
                reject(thrown)
            })
        })
    },
    cancelReq() {
        cancel()
    }
}
