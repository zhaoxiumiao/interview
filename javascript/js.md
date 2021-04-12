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
### 作用域和闭包
   - 