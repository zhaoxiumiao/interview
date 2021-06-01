//通用的事件绑定函数

function bindEvent(elem, type, fn){
    elem.addEventListener(type, fn)
}

const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', event => {
    // console.log(event.target); //获取触发的元素
    event.preventDefault() //阻止默认行为
    alert('clicked')
})

const p1 = document.getElementById('p1')
bindEvent(p1, 'click', event=>{
    event.stopPropagation() //阻止冒泡
    console.log('激活');
})

const body = document.body
bindEvent(body, 'click', event => {
    console.log('取消');
    // console.log('body clicked');
    // console.log(event.target);
})
// const div2 = document.getElementById('div2')
// bindEvent(div2, 'click', event => {
//     console.log('div2 clicked');
//     console.log(event.target);
// })

