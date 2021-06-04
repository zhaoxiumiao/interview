//传统
// function query(name){
//     // const search = location.search.substr(1) //类似于 array.slice()
//     const search = 'a=10&b=20&c=30'
//     //search: 'a=10&b=20&c=30'
//     const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
//     const res = search.match(reg)
//     if(res === null){
//         return null
//     }
//     console.log(res);
//     // [
//     //     '&b=20&',
//     //     '&',
//     //     '20',
//     //     '&',
//     //     index: 4,
//     //     input: 'a=10&b=20&c=30',
//     //     groups: undefined
//     // ]
//     return res[2]
// }

// URLSearchParams

function query(name){
    // const search = location.search
    const search = '?a=10&b=20&c=30'
    const p = new URLSearchParams(search)
    return p.get(name)
}

console.log(query('c'));