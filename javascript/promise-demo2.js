const p1 = new Promise((resolve,reject)=>{

})

console.log('p1', p1); //pending

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve() //fulfilled
    })
})

console.log('p2', p2); //pending 一开始打印时
setTimeout(() => console.log('p2-setTimeout', p2)) //fulfilled


const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject() //rejected
    })
})

console.log('p3', p3); // pending 一开始打印时
setTimeout(() => console.log('p3-setTimeout', p3))//rejected