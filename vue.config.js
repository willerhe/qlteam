module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:9900',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/',
                }
            }
        }

    }

}