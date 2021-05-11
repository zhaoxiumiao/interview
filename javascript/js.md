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
