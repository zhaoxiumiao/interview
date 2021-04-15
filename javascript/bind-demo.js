function fn1 (a,b){
    console.log('this',this);
    console.log(a,b);
    return 'this is fn1'
}

const fn2 = fn1.bind({x:100},10,20,30)
const res = fn2()
console.log(res);