const url1 = 'https://img4.sycdn.imooc.com/5a9fc8070001a82402060220-160-160.jpg'
const url2 = 'https://th.wallhaven.cc/lg/6o/6od3px.jpg'
function loadImg(src){
    const p = new Promise((resolve,reject)=>{
        const img = document.createElement('img')
        img.onload = () =>{
            resolve(img)
        }
        img.onerror = () =>{
            reject(new Error(`图片加载失败 ${src}`))
        }
        img.src = src
    })
    return p
}

loadImg(url1).then(img=>{
    console.log(img.width);
    return img
}).then(img =>{
    console.log(img.height);
    return loadImg(url2)
}).then(img =>{
    console.log(img.width);
    return img
}).then(img =>{
    console.log(img.height);
}).catch(err=>{
    console.error(err);
})