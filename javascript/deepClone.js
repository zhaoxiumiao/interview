const obj1 = {
    age:20,
    name:'xxx',
    address:{
        city:'beijing'
    },
    arr:['a','b','c']
}

const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
console.log(obj1.address.city);


function deepClone(obj = {}){
    if(typeof obj !== 'object' || obj == null){
        //obj不是对象或者是null直接返回
        return obj
    }

    let result
    if(obj instanceof Array){ //判断obj是否是属于数组类型
        result = []
    }else{
        result = {}
    }
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            //保证不是对象原型链上的属性
            result[key] = deepClone(obj[key])
        }
    }
    return result
}