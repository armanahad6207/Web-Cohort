// the map methode is used to transform an array by applying a callback function in each ellement.we can create a our own version of map function.


let arr = [12,23,34,56,45]

function mymap(array,fun){
     
    let newarray = [];
    for(let i=0;i<array.length;i++){
        newarray.push(fun(array[i]));
    }
    return newarray;
}

let newarray=mymap(arr,function(value){
   return value+1;
})

console.log("new array",newarray)
console.log("old,array",arr)

let array2=[23,24 ,26,45,75,4,90]


let offer=mymap(array2,function(value){
    if(value<10){
        return value+10;
    }
    else{
        return value-10
    }
})
console.log(offer)

// let newarr=arr.map((value)=>{
//   return val+3
// })