function deepClone(obj){
    if(typeof obj !== 'object' || obj == null){
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

// Object.assign({})不是深拷贝是第一层级的浅拷贝

const obj = {
    a: 1,
    b: [1, 2, [3, 4]],
    c: {
        iphone: '苹果'
    }
}
const obj2 = deepClone(obj)
obj.b[2][0] = 1000
console.log(obj);
console.log(obj2);