// const p1 = Promise.resolve().then(() => {
//     return 100
// })
// console.log('p1', p1); // fulfilled 触发后续 then 回调

// p1.then(() => {
//     console.log('123');
// })

// const p2 = Promise.resolve().then(() => {
//     throw new Error('then error')
// })
// console.log('p2', p2); // rejeced 触发后续 catch 回调
// p2.then(() => {
//     console.log('456');
// }).catch(err => {
//     console.error('err100', err);
// })

// const p3 = Promise.reject('my error').catch(err => {
//     console.error(err);
// })
// console.log('p3', p3); // fulfilled 注意！触发 then 回调
// p3.then(() => {
//     console.log(100);
// })

// const p4 = Promise.reject('my error').catch(err => {
//     throw new Error ('catch err')
// })

// p4.then(() => {
//     console.log(200);
// }).catch(() => {
//     console.log('some err');
// })

// console.log('p4', p4); // rejected

// 第一题
// Promise.resolve().then(() => {
//     console.log(1);
// }).catch(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// })

//第二题
// Promise.resolve().then(()=>{
//     console.log(1);
//     throw new Error('erro1')
// }).catch(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// })

//第三题
Promise.resolve().then(() => {
    console.log(1);
    throw new Error('erro1')
}).catch(() => {
    console.log(2);
}).catch(() => { //注意这里是 catch
    console.log(3);
})