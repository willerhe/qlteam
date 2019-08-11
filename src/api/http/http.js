import axios from 'axios'
import el from 'element-ui'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const http = axios.create({
    baseURL: "http://127.0.0.1:9900/api/v1",
    // withCredentials: true
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    console.log("在发送请求之前做些什么", config.method)
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, function (error) {
    console.log("对请求错误做些什么")
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    console.log("对响应数据做点什么")
    return response;
}, function (error) {
    let statusCode = error.response.status
    let data = error.response.data
    switch (statusCode) {
        case 403: {
            el.Message.warning(data||"服务器拒绝了您的请求。")
            break;
        }
        case 404: {
            el.Message.warning("您的请求不存在")
            break;
        }
        case 500: {
            el.Message.warning("服务器内部错误")
            break;
        }
    }
    console.log(error)
    return Promise.reject(error);
});

// 导出使用
http.generalApi = function (odd, plural) {
    return {
        list: function (params) {
            return http.get(plural, {params: params})
        },
        delete: function (id) {
            return http.delete(odd + '/' + id)
        },
        get: function (id) {
            return http.get(odd + '/' + id)
        },
        save: function (domain) {
            return http.post(odd, domain)
        },
        update: function (domain) {
            return http.put(odd + '/' + domain.id, domain)
        }
    }
}


export default http


