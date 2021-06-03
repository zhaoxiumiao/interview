const input1 = document.getElementById('input1')
// let timer = null
// input1.addEventListener('keyup', function() {
//     if(timer){
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         console.log(input1.value); //模拟触发change事件

//         //清空定时器
//         timer = null
//     }, 500)
// })

// 防抖
function debounce(fn, delay=500){
    // timer 是在闭包中的
    let timer = null
    
    return function() {
        if(timer){
            clearTimeout(timer)
        }
        const b = {
            name: '阿里大家佛家说的'
        }
        timer = setTimeout(() => {
            fn.apply(b, arguments)
            timer = null
        }, delay)
    }
}

input1.addEventListener('keyup', debounce(function(){
    console.log(this.name);
    console.log(input1.value);
}, 600))
