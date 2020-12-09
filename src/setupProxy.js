const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
    // target 表示目标服务器的地址
    //  /api 表示代理路径
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:3000/',
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/"  
                // 这样处理后，最终得到的接口路径为： http://localhost:3000/xxx
            }
        }
    )
    );
    /* app.use(createProxyMiddleware('/auth', {
        target: 'http://127.0.0.1:4002/', // 另一个目标服务器
        changeOrigin: true,
        pathRewrite: {
            "^/auth": "/"
        }
    })); */
};