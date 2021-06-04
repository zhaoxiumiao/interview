const obj1 = {
    a: 10,
    b: 20,
    sum(){
        return this.a + this.b
    }
}


// const obj2 = new Object({
//     a: 10,
//     b: 20,
//     sum(){
//         return this.a + this.b
//     }
// })

const obj2 = new Object(obj1) //全相等

const obj3 = Object.create(null)
const obj4 = new Object() // {}

const obj5 = Object.create({
    a: 10,
    b: 20,
    sum(){
        return this.a + this.b
    }
}) //这里边是原型


const obj6 = Object.create(obj1)