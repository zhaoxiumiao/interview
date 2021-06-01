const list = document.getElementById('list')

//创建一个文档片段，此时还没有插入到DOM结构中
const frag = document.createDocumentFragment()

for(let i=0; i< 10; i++){
    const li = document.createElement('li')
    li.innerHTML = `list item ${i}`

    //先插入文档片段中
    frag.appendChild(li)
}

//都完成之后,再插入到DOM树中
list.appendChild(frag)