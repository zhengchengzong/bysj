import axios from 'axios'
const http = axios.create({
        //通用请求的地址前缀
        baseURL: '/api',
        //超时时间
        timeout: 10000,
    })
    // Add a request interceptor,请求拦截器
http.interceptors.request.use(function(config) {
    // Do something before request is sent
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor，响应拦截器
http.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default http