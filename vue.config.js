
const testApiRoot = 'http://localhost:28000' // 测试环境

const mockApiRoot = 'http://localhost:28000' // 本地mock地址
const prodApiRoot = 'http://localhost:28000' // 线上环境地址
const ENV = process.env.NODE_ENV

function getProxyObj () {
    let proxyObj = { // 测试
        '/api/': {
            target: testApiRoot,
            changeOrigin: true,
            // pathRewrite: {
            //     '^/api': ''
            // },
            onProxyReq(proxyReq, req) {
                // eslint-disable-next-line no-console
                console.info(`proxy 请求地址：${testApiRoot}${req.originalUrl}`)
            },
        },
    }

    if (ENV === 'local') { // 本地mock
        proxyObj = {
            '/api/': {
                target: mockApiRoot,
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api': ''
                // },
                onProxyReq(proxyReq, req) {
                    // eslint-disable-next-line no-console
                    console.info(`proxy 请求地址：${mockApiRoot}${req.originalUrl}`)
                },
            },
        }
    }

    if (ENV === 'prod') { // 正式环境
        proxyObj = {
            '/api/': {
                target: prodApiRoot,
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api': ''
                // },
                onProxyReq(proxyReq, req) {
                    // eslint-disable-next-line no-console
                    console.info(`proxy 请求地址：${prodApiRoot}${req.originalUrl}`)
                },
            },
        }
    }

    return proxyObj
}

module.exports = {
    devServer: {
        port: 3308,
        proxy: getProxyObj()
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: []
        }
    }
}
