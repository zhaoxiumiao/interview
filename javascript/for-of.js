function muti(num) {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

const nums = [1, 2, 3]

// nums.forEach(async i =>{ //同步循环
//     const res = await muti(i)
//     console.log(res);
// })

!(async function (){ //用于异步遍历
    for(let i of nums){
        const res = await muti(i)
        console.log(res);
    }
})()
