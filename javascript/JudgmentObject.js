judg([1,2,3])

function judg(obj){
    if(typeof obj === 'object' && obj != null){
        if(obj instanceof Array){
    
        }else{
            console.log(obj + '--> 是对象');
        }
    }
}