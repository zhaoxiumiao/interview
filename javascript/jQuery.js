class jQuery{
    constructor(selector){
        const result = document.querySelectorAll(selector)
        const length = result.length
        for(let i = 0; i < this.length;i++){
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }
    each(fn){
        for(let i = 0; i < this.length;i++){
            const elem = this[i]
            fn(elem)
        }
    }
    on(type,fn){
        this.each(elem=>{
            elem.addEventListener(type,fn,false)
        })
    }
}

//插件
jQuery.prototype.dialog = info =>{
    alert(info)
}

//造轮子
class myjQuery extends jQuery {
    constructor(selector){
        super(selector)
    }
    //扩展自己的方法
    style(data){
        console.log(data);
    }
}

