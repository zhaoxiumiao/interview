// import {fn, name, obj} from './a' //结构赋值
import {fn, name, obj} from './b' //结构赋值
import c from './c'
fn()
console.log(name);
console.log(obj);
console.log(c);

const sum = (a, b) => {
    return a + b
}
const res = sum(10, 20)
console.log(res);