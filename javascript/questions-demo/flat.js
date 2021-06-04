
// let result =[]
// function flat(arr){
//     if(!(arr instanceof Array)){
//         result.push(arr)
//         return arr
//     }
//     arr.forEach(item => {
//         flat(item)
//     })
//     return result
// }

// function flat(arr){
//     //验证arr中,还有没有深层数组 [1, 2, [3, 4]]
//     const isDeep = arr.some(item => item instanceof Array)
//     if(!isDeep){
//         return arr // 已经是 flatern [1, 2, 3, 4]
//     }
//     const res = Array.prototype.concat.apply([], arr)
//     return flat(res) //递归
// }

// function flat(arr){
//     return [].concat(...arr.map(item=>{
//         if(item instanceof Array){
//             return [].concat(...flat(item))
//         }
//         return item
//     }))
// }


const res = flat([1, 2, [3,[1,2,3,[23,4523,4]], 4], 5])
console.log(res);
