const $p1 = $('<p>一段文字</P>')
const $p2 = $('<p>一段文字</P>')
const $p3 = $('<p>一段文字</P>')

$('#container')
            .append($p1)
            .append($p2)
            .append($p3)
// console.log($('#container').children().length);
// alert('本次 call stack 结束，DOM 结构已更新，但尚未触发渲染')
// (alert 会阻断 js 执行，也会阻断DOM 渲染，便于查看效果)


//微任务: DOM渲染前触发
Promise.resolve().then(() => {
    console.log('length1',
        $('#container').children().length); //3
        alert('Promise then') // DOM渲染了吗? ---No
})


//宏任务: DOM渲染后触发
setTimeout(() => {
    console.log('length2',
        $('#container').children().length); //3
        alert('setTimeout') // DOM渲染了吗? ---Yes
})