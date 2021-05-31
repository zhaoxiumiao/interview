async function fn1() {
    // return 100 //相当于 return Promise.resolve(100)
    return Promise.resolve(299)
}

// const res1 = fn1() // 执行async 函数，返回的是一个Promise 对象
// console.log('res1', res1); // Promise对象
// res1.then(data => {
//     console.log('data', data); //100
// }) 


// !(async function() {
//     const p1 = Promise.resolve(300)
//     const data = await p1 // await 相当于 Promise then
//     console.log('data', data);
// })()

// !(async function() {
//     const data1 = await 400 // await Promise.resolve(400)
//     console.log('data1', data1);
// })()

// !(async function() {
//     const data2 = await fn1() 
//     console.log('data2', data2);
// })()

// !(async function() {
//     const p4 = Promise.reject('err1') // rejected状态
//     try{
//         const res = await p4
//         console.log(res);
//     } catch (ex){
//         console.error(ex); // try..catch 相当于Promise catch
//     }
// })()

!(async function() {
    const p4 = Promise.reject('err1') // rejected状态
    const res = await p4 // await -> then 
    console.log('res', res); //这里不执行, 因为报错
})()