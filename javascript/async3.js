// async function async1 () {
//     console.log('async1 start'); //2
//     await async2()
//     // await 的后面，都是可以看做是 callback 里的内容，即异步
//     // 类似，event loop, setTimeout(cb1)
//     // setTimeout(function(){console.log('async1 end')})
//     // Promise.resolve().then(()=>{console.log('async1 end')}) 
//     console.log('async1 end'); //5
// }

// async function async2 () {
//     console.log('async2'); //3
// }

// console.log('script start'); //1
// async1()
// console.log('script end'); //4
// //同步代码执行完毕，开始启动（event loop）


async function async1 () {
    console.log('async1 start'); //2
    await async2()

    //下面三行都是异步回调， callback 的内容
    console.log('async1 end'); //5
    await async3() 
     
    //下面一行是异步回调的内容
    console.log('async1 end 2'); //7
}

async function async2 () {
    console.log('async2'); //3
}

async function async3() {
    console.log('async3'); //6
}

console.log('script start'); //1
async1()
console.log('script end'); //4