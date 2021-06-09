// let arr = [100, 8, 32, 0, 999, 88]

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length-i; j++){
//         if(arr[j]> arr[j+1]){
//             [arr[j+1], arr[j]]= [arr[j], arr[j+1]]
//         }
//     }
// }

// console.log(arr);

// function flat(arr){
//     let result = [].concat(...arr)
//     let check = result.some(item=> item instanceof Array)
//     if(!check){
//         return result
//     }
//     return flat(result)
// }


// let arr = flat([100,200,[1,2,3,4,[3,4,5]],2,5])
// console.log(arr);

function isObject(obj){
    if(typeof obj === 'object' && obj !=null){
        return true
    }
    return false
}

function isEqual(obj1,obj2){
    if(!isObject(obj1) || !isObject(obj2)){
        return obj1 === obj2
    }

    if(obj1 === obj2){
        return true
    }

    let key1 = Object.keys(obj1).length
    let key2 = Object.keys(obj2).length
    if(key1 !== key2){
        return false
    }

    for(let key in obj1){
        let res = isEqual(obj1[key],obj2[key])
        if(!res){
            return false
        }
    }
    return true

}

let arr1 = {a:{b:1},c:{d:2,q:3}}
let arr2 = {a:{b:1},c:{d:2,q:2}}
let res = isEqual(arr1, arr2)
console.log(res);

