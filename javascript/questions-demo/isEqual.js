//判断是否是对象
function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}


function isEqual(obj1, obj2){
    if(!isObject(obj1) || !isObject(obj2)){
        // 值类型(注意，参与equal 的一般不会是函数)
        return obj1 === obj2
    }
    if(obj1 === obj2){
        return true
    }
    //两个都是对象或数组，而且不相等
    //1. 先取出 obj1和obj2 的 keys，比较个数
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if(obj1Keys.length !== obj2Keys.length){
        return false
    }
    //2. 以 obj1为基准 , 和 obj2 一次递归比较
    for(let key in obj1){
        // 比较当前 key 的 val
        const res = isEqual(obj1[key], obj2[key])
        if(!res){
            return false
        }
    }
    //3.全相等
    return true
}

const obj1 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}

function deepClone(obj){
    if(!isObject(obj)){
        return obj
    }
    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result[key] = deepClone(obj[key])
        }
    }
    return result
}

const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}
const obj3 = deepClone(obj2)
obj2.b.x = 500
console.log(obj3);
console.log(obj2);

const arr1 = [1, 2, {x:300}]
const arr2 = [1, 2, {x:300}]

// console.log(isEqual(obj1, obj2));
// console.log(isEqual(arr1,arr2));

