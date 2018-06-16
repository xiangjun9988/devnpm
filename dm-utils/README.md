# Utils工具包
>发送异步请求
@url 	请求的地址
@fn 	请求成功时候的回调函数
get请求：Utils.getData()


post请求
postData(url, params, fn) 


将对象转化成query的形式
```
将对象转化成query的形式
@obj 	转化的对象 {color:red, num:100}
return 	?color=red&num=100
```