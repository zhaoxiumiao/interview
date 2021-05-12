function loadImg(src){
    //pending
    const p = new Promise((resolve,reject)=>{
        const img = document.createElement('img')
        img.onload = () =>{
            resolve(img) // resolved
        }
        img.onerror = () =>{
            reject(new Error(`图片加载失败 ${src}`)) //rejected
        }
        img.src = src
    })
    return p
}

const src1 = 'https://img4.sycdn.imooc.com/5a9fc8070001a82402060220-160-160.jpg'
const src2 = 'https://th.wallhaven.cc/lg/6o/6od3px.jpg'

async function loadImg1() {
    const img1 = await loadImg(src1)
    return img1
}

async function loadImg2() {
    const img2 = await loadImg(src2)
    return img2

}

!(async function() { //感叹号用来隔开 不然会报错
    //同步写法

    // img1
    // const img1 = await loadImg(src1)
    const img1 = await loadImg1() //await 后也可以跟async 函数
    console.log(img1.height, img1.width);

    //img2
    // const img2 = await loadImg(src2)
    const img2 = await loadImg2() //await 后也可以跟async 函数
    console.log(img2.height, img2.width);
})()