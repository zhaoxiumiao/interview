//异步 (callback 回调函数)
// console.log(100);
// setTimeout(()=>{
//     console.log(200);
// },1000)
// console.log(300);
// console.log(400);

//同步
console.log(100);
// alert(200) //这里会卡住
console.log(300);



// async function fn() {
//     return 100
// }

// (async function(){
//     const a = fn()
//     console.log(a);
//     const b = await fn()
//     console.log(b);
// })()