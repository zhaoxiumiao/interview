async function async1(){
    console.log('async1 start');
    await async2()
    console.log('async1 end');
}

async function async2(){
    console.log('async2');
}

console.log('script start');

setTimeout(function(){
    console.log('setTimeout');
}, 0)


async1()

// 初始化 Promise时，传入的函数会立刻被执行
new Promise(function(resolve){
    console.log('promise1'); //所以这里是同步代码
    resolve()
}).then(function(){
    console.log('promise2');
})

console.log('script end');