const p1 = Promise.resolve(100)
console.log('p1',p1); //fulfilled
p1.then(data1 =>{
    console.log('data1',data1);
}).catch(err1 =>{
    console.log('err1',err1);
})


const p2 = Promise.reject('err')
console.log('p2',p2); // rejected
p2.then(data2 =>{
    console.log('data2',data2);
}).catch(err2 =>{
    console.log('err2',err2);
})