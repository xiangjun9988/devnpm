// author: daxiang
// 定义工具方法
let Util = {
    /**
     * 发送异步请求
     * @url 	请求的地址
     * @fn 		请求成功时候的回调函数
     **/
    getData(url, fn) {
        // 实例化xhr对象
        let xhr = new XMLHttpRequest();
        // 监听状态变化
        xhr.onreadystatechange = () => {
            // 监听数据请求完毕
            if (xhr.readyState === 4) {
                // 判断状态码
                if (xhr.status === 200) {
                    // 将数据转化成json字符串
                    fn && fn(JSON.parse(xhr.responseText))
                }
            }
        }
        // 打开请求
        xhr.open('GET', url, true);
        // 发送数据
        xhr.send(null)
    },
    /**
     * 发送异步请求
     * @url 	请求的地址
     * @fn 		请求成功时候的回调函数
     **/
    postData(url, params, fn) {
        // 实例化xhr对象
        let xhr = new XMLHttpRequest();
        // 监听状态变化
        xhr.onreadystatechange = () => {
            // 监听数据请求完毕
            if (xhr.readyState === 4) {
                // 判断状态码
                if (xhr.status === 200) {
                    // 将数据转化成json字符串
                    fn && fn(JSON.parse(xhr.responseText))
                }
            }
        }
        // 打开请求
        xhr.open('POST', url, true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=utf-8");
        // 发送数据
        xhr.send(params);
    },
    /**
     * 将对象转化成query的形式
     * @obj 	转化的对象 {color:red, num:100}
     * return 	?color=red&num=100
     **/
    objToQuery(obj,type) {
        type = type ? '':'?';
        let result = '';
        // 遍历对象，转化成json
        for (var i in obj) {
            result += '&' + i + '=' + obj[i]
        }
        // 去除最后一个&
        return type + result.slice(1)
    }
}

export default Util;