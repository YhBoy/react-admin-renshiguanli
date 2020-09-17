const { createProxyMiddleware  } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
    app.use(createProxyMiddleware('/devApi',
        {
            target: 'http://www/web-jshtml.cn/api/react',
            changeOrigin: true
        }
    ));
};



