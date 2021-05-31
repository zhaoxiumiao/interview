function fn1(){
    console.log(this);
}

// fn1.call({x:100})

// const fn2 = fn1.bind({x:200})
// fn2()

class People{
    constructor(name){
        this.name = name
        this.age = 20
    }
    sayHi(){
        console.log(this);
    }
}

const zhangsan = new People('张三')
zhangsan.sayHi() //zhangsan 对象


