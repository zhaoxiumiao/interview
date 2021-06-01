# javaScript

### 值类型
   - 值类型是存在栈里边的
     - 栈简单来说就是key->value的一种形势一个值对应一个key
   - 常见的值类型
    ```js 
    let a //undefined
    const s = 'abc'
    const n = 100
    const b = true
    const s = Symbol('s')
    ```
  
### 引用类型
   - 引用类型是key->内存地址->对应的值 值是存在堆里的
   - 常见的引用类型
    ```js 
    const obj = {x:100}
    const arr = ['a','b','c']
    const n = null //特殊引用类型，指针指向为空地址
    
    function fn(){}//特殊引用类型
    ``` 
### typeof运算符
   - typeof可以识别的有
     - 识别所有值类型
     - 识别函数
     - 判断是否是引用类型(不可再细分)都是object
### 深拷贝
   - 看代码(使用递归做的)
### 类型转换-类型转换
   - 字符串拼接
     - parseInt(string) string转换为number
   - ==
     - 双等会发生很多莫名的类型转换
     - 建议除了 == null 之外，其他一律用=== 
     - ==null 和 ===null || ===undefined是一个意思
   - if语句和逻辑运算符
     - truly变量: !!a === true的变量
     - falsely变量: !!a === false 的变量
     ```js
     //以下是falsely 变量。除此之外都是truly 变量
     !!0 === false
     !!NaN === false
     !!'' === false
     !!null === false
     !!undefined === false
     !!false === false
     ``` 
     - if
       - if(这里边判断的是falsely和truly变量)是truly就执行
     - 逻辑判断
       - &&
         - 返回的是false的值 例:`10 && 0`打印的值是0
         - 返回的是true 值 例:`'' || 'abc'`打印的值是'abc'
### 原型原型链
   - class
     - constructor
     - 属性
     - 方法
     - super 重构父类constructor
     - extends 继承关键字
   - 原型链
     - 自身上没有的方法通过__proto__向上找一直到Object 的__proto__指向null
   - 自己写jQuery（看代码）
### 类型判断 - instanceof
   - 可以判断 就是判断一个属性是不是属于这个类原型链上的 属于就是true 否则是false
   - 可以判断是不是数组和对象
### 作用域 闭包 this
   - 作用域
     - 全局作用域
     - 函数作用域
     - 块级作用域
   - 闭包
     - 作用域应用的特殊情况，有两种表现:
       - 函数作为参数被传递
       - 函数作为返回值被返回
       - 自由变量的查找，是在函数定义的地方，向上级作用域查找不是在执行的地方！！！
   - this
     - 作为普通函数
       - 这时this指向window
     - 使用call apply bind
       - 使用call,apply会直接改变this指向并且直接执行函数
       - bind则是返回一个改变作用域后的函数
     - 作为对象方法被调用
       - this指向这个对象
     - 在class方法中调用
       - constructor中的this指向这个constructor本身，方法中的this指向实力对象
     - 箭头函数
       - 箭头函数中this是继承自上级作用域的this
### 异步和单线程
   - js中的一些特点
      -  js是单线程语言，只能同时做一件事儿
      -  浏览器和nodejs已支持js启动进程，如Web Worker
      -  js和dom渲染共用同一个线程，因为js可以修改dom结构
   - 以异步解决单线程语言问题
      -  遇到等待（网络请求，定时任务）不能卡住
      -  需要异步
      -  回调callback函数形式
   - 异步与同步
      -  基于js是单线程语言
      -  异步不会阻塞代码执行
      -  同步会阻塞代码执行
   - 异步应用场景
     - 网络请求，如ajax图片加载
     - 定时任务，如setTimeout
   - promise
     - promise是解决callback hell 才出现的
### js异步 - 进阶
   - event loop (事件循环/事件轮询)
     - event loop 是什么?
       - js是单线程运行的
       - 异步要基于回调来实现
       - event loop 就是异步回调的实现原理
     - js 如何执行?
       - 从前到后, 一行一行执行
       - 如果某一行执行报错,则停止下面代码的执行
       - 先把同步代码执行完,再执行异步
     - 总结event loop过程
       - 同步代码，一行一行放在Call Stack执行
       - 遇到异步，会先"记录" 下，等待时机（定时、网路请求等）
       - 时机到了，就移动到 Callback Queue
       - 如Call Stack 为空（即同步代码执行完）Event Loop 开始工作
       - 轮询查找Callback Queue，如果有则移动到 Call Stack 执行
       - 然后继续轮询查找（永动机一样）
     - DOM事件和event loop
       - js是单线程的
       - 异步(setTimeout, ajax等) 使用回调, 基于event loop
       - DOM 事件也使用回调, 基于event loop
   - Promise
     - 三种状态
       - pending resolved rejected
       - pending -> resolved 或 pending -> rejected
       - 变化不可逆
     - 状态的表现和变化
       - 状态的表现
         - pending 状态, 不会触发then 和 catch
         - fulfilled 状态, 会触发后续的then回调函数
         - rejected 状态, 会触发后续的catch 回调函数
       - then和catch改变状态
         - then正常返回resolved, 里面有报错则返回rejected
         - catch正常返回resolved, 里面有报错则返回rejected
     - then 和 catch 对状态的影响
   - async/await
     - 异步回调 callback hell
     - Promise then catch 链式调用, 但也是基于回调函数
     - async/await 是同步语法，彻底消灭回调函数
   - async/await 和 Promise 的关系
     - 执行async函数，返回的是Promise对象
     - await相当于Promise 的 then
     - try...catch可捕获异常, 代替了Promise的catch
   - 异步的本质
     - js还是单线程,还是异步，还是基于event loop
     - async/await 只是一个语法糖，但是这个糖真香
   - for of
     - 用于遍历异步操作
   - 宏任务 macroTask 和微任务 microTask
     - 什么是宏任务，什么是微任务
       - 宏任务:setTimeout, setInterval, Ajax, DOM事件
       - 微任务: Promise async/await
       - 微任务执行时机比宏任务要早 
     - event loop和 DOM的渲染
       - js是单线程，而且和DOM渲染是公用一个线程
       - js执行的时候，需要留一些时机供DOM渲染
       - 回顾event loop过程（增加DOM渲染时机）
         - call Stack 空闲时 尝试DOM渲染 再次触发EventLoop
         - 每次Call Stack 清空（即每次轮询结束）, 即同步任务执行完
         - 都是DOM重新渲染的机会，DOM结构如有改变则重新渲染
         - 然后再去触发下一次Event Loop
     - 宏任务和微任务的区别
       - 宏任务: DOM 渲染后触发，如setTimeout
       - 微任务: DOM 渲染前触发，如Promise
### js-Web-API-DOM
   - 从js基础知识到JS Web API
     - js基础知识，规定语法（ECMA 262 标准）
     - js Web API, 网页操作的API (W3C标准)
     - 前者是后者的基础，两者结合才能真正的实际应用
   - DOM操作（Documnet Object Model）
   - 知识点
     - DOM本质
       - html 就是特定的标签结构是和xml一样的
       - 本质就是一个树结构
     - DOM节点操作
       - 获取DOM节点
         - document.getElementById('id名')
         - document.getElementsByTagName('标签名') 集合
         - document.getElementsByClassName('类名') 集合
         - document.querySelectorAll('') 集合
       - attribute
         - 对dom节点属性进行修改
         - 修改对象属性,不会体现到html结构中
       - property
         - 修改html属性,会改变html结构
         - 通过js属性的方式来改变页面渲染和结构的一种形式
         - 元素的js变量做的修改
         - 都有可能引起DOM重新渲染
     - DOM结构操作
       - 新建节点 createElement('标签名')
       - 插入节点 appendChild()
       - 移动节点 appendChild(已有的标签名)
       - 获取父元素 parentNode
       - 获取子元素列表 div1.childNodes nodeType是普通标签
       - 删除节点 removeChild
     - DOM性能
       - DOM操作非常"昂贵", 避免频繁的DOM操作
       - 对DOM查询做的缓存
       - 将频繁操作改为一次性操作
   - 题目
     - DOM是哪种数据结构
       - 树(DOM树)
     - DOM操作的常用API
       - DOM节点的操作
       - DOM结构的操作
       - attribute property
     - attr和property的区别
       - property: 修改对象属性,不会体现到html结构中
       - attribute: 修改html属性，会改变html结构
       - 两者都可能会引起DOM重新渲染
     - 一次性插入多个DOM节点，考虑性能
       - 可以使用createDocumentFragment文档片段
   - BOM操作(Browser Object Model)
   - 知识点
     - navigator
       - 浏览器信息
       - 通过 navigator.userAgent来拿到浏览器信息
     - screen
       - 屏幕信息
       - screen.width 屏幕宽度
       - screen.height 屏幕高度
     - location
       - 地址信息
       - location.href就是整个网址
       - location.protocol 是协议
       - location.host 域名
       - location.search 查询参数
       - location.hash 哈希去井号后边内容
       - location.pathname 路由
     - history
       - 前进后退
       - history.back() 后退
       - history.forward() 前进
   - 题目
     - 如何识别浏览器的类型
       - 通过 navigator.userAgent来拿到浏览器信息
     - 分析拆解url各个部分
   - 事件
   - 知识点
     - 事件绑定
       - addEventListener('事件',函数)
     - 事件冒泡
       - 
     - 事件代理
       - 事件代理是通过事件冒泡进行事件代理
       - 代码简洁
       - 减少浏览器内存占用
       - 但是, 不要滥用
   - 题目
     - 编写一个通用的事件监听函数
       - 看代码
     - 描述事件冒泡流程
       - 基于DOM树形结构
       - 事件会顺着触发元素往上冒泡
       - 应用场景:事件代理
     - 无限下拉的图标列表，如何监听每个图片的点击
       - 事件代理
       - 用e.target获取触发元素
       - 用matches 来判断是否是触发元素
   - ajax
   - 题目
     - 手写一个简易的ajax
     - 跨域的常用实现方式
   - 知识点
     - XMLHttpRequest
     - 状态码
       - readyState status
     - 跨域:同源策略, 跨域解决方案
       - 什么是跨域(同源策略)
         - ajax请求时,浏览器要求当前网页和server必须同源(安全)
         - 同源: 协议 域名 端口, 三者必须一致
         - 加载图片css js 可无视同源策略
       - jsonp
         - `<script>` 可以绕过跨域限制
         - 服务器可以任意的动态拼接数据返回
         - 所以, `<script>`就可以获得跨域的数据, 只要服务端愿意返回
       - CORS (服务端支持)
       - 一些常用的ajax请求工具 axios jQuery fetch
   - 存储
   - 题目
     - 描述 cookie localStorage和sessionStorage区别
       - 容量
       - API易用性
       - 是否跟随http请求发送出去
   - 知识点
     - cookie
       - 本身用于浏览器和server 通讯
       - 被"借用"到本地存储来 
       - document.cookie = 'a=123;' 来修改
       - cookie缺点
         - 最多只能存4KB
         - http请求时需要发送到服务端, 增加请求数据量
         - 只能用document.cookie = `...` 来进行修改,太过简陋
     - localStorage sessionStorage
       - HTML5 专门为存储而设计, 最大可存5M
       - API简易易用setItem getItem
       - 不会随着http求情被发送出去
       - localStorage 数据会永久存储,除非代码或手动删除
       - sessionStorage 数据只存在于当前会话, 浏览器关闭则清空
       - 一般用localStorage 会更多一些
### http面试题
   - 前端开发界面
   - 需要调用后端的接口,提交/获取 数据 --- http协议
   - 要求事先掌握好ajax
   - 题目
     - http常见的状态码有哪些?
     - http常见的header有哪些
     - 什么是Restful API
     - 描述一下http的缓存机制(重要)
   - 知识点
     - 状态码
       - 状态码分类
         - 1xx 服务器收到请求
         - 2xx 请求成功, 如200
         - 3xx 重定向, 如302 
         - 4xx 客户端错误, 如404
         - 5xx 服务端错误, 如500
       - 常见的状态码
         - 200成功
         - 301永久重定向(配合 location(新地址) , 浏览器自动处理)
         - 302 临时重定向(配合 location, 浏览器自动处理)
         - 304 资源未被修改
         - 404 资源未被找到
         - 403 没有权限
         - 500 服务器错误
         - 504 网关超时
       - 关于协议和规范
         - 就是一个约定
         - 要求大家都跟着执行
         - 不要违反规范,例如IE浏览器
     - http methods
       - 传统的 methods
         - get 获取服务器的数据
         - post 向服务器提交数据
         - 简单的网页功能, 就这两个操作
       - 现在的 methods
         - get 获取数据
         - post 新建数据
         - path/put 更新数据
         - delete 删除数据
       - Restful API
         - 一种新的API设计方法(早已推广使用)
         - 传统的API设计: 把每个url 当做一个功能
         - Restful API设计: 把每个URL 当做一个唯一的资源
         - 如何设计成一个资源?
           - 尽量不用url参数
             - 传统API设计: /api/list?pageIndex=2
             - Restful API 设计: /api/list/2
           - 用 method 表示操作类型
             - 传统API设计
               - post请求 /api/create-blog
               - post请求 /api/update-blog?id=100
               - get请求 /api/get-blog?id=100
             - Restful API设计
               - post 请求 /api/blog
               - patch 请求 /api/blog/100
               - get 请求 /api/blog/100
     - http headers
       - 常见的 Request Headers
       - 常见的 Response Headers
       - Request Headers
         - Accept 浏览器可接收的数据格式
         - Accept-Encoding 浏览器可接收的压缩算法, 如gzip
         - Accept-Languange 浏览器可接收的语言, 如zh-CN
         - Connection: keep-alive 一次TCP连接重复使用
         - cookie
         - Host 域名
         - User-Agent (简称UA) 浏览器信息
         - Content-type 发送数据的格式, 如application/json
       - Response Headers
         - Content-type 返回数据的格式, 如application/json
         - Content-length 返回数据的大小, 多少字节
         - Content-Encoding 返回的数据压缩算法, 如gzip
         - Set-Cookie 服务端用Set-Cookie来改cookie
       - 可以自定义header
       - 缓存相关的header
         - Cache-control Expires
         - Last-Modified If-Modified-Since
         - Etag If-None-Match
       - http缓存
         - 关于缓存的介绍
           - 什么是缓存?
           - 为什么需要缓存?
             - 因为网络请求的问题
             - 就是为了减少网络请求
           - 哪些资源可以被缓存? -- 静态资源(js css img)
         - http 缓存的策略(强制缓存 + 协商缓存)
           - http缓存-强制缓存
             - 
         - 刷新操作方式, 对缓存的影响


     