// const xhr = new XMLHttpRequest()
// xhr.open("GET", "/test.json", true) //true是异步的意思
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4){
//         //0 还没调用send() 方法
//         //1 正在发送请求
//         //2 send() 方法执行完成, 已经接收到全部的响应内容
//         //3 正在解析响应内容
//         //4 响应内容解析完成,可以在客户端调用
//         if(xhr.status === 200){
//             //2xx 请求成功
//             //3xx 重定向,浏览器直接跳转 301 302 304
//             //4xx 客户端请求错误, 404 403
//             //5xx 服务器端错误
//             // console.log(JSON.parse(xhr.responseText));
//             alert(xhr.responseText)
//         }else{
//             console.log('其他情况');
//         }
//     }
// }

// const postData = {
//     userName: 'zhangsan',
//     password: 'xxx'
// }

// xhr.send(null)
//JSON.stringify(postData)

function ajax(url) {
    const p = new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = () =>{
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                }else if(xhr.status === 404){
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}

ajax('/test.json').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})