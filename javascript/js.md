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
   - 看代码
     