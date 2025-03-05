let arr = [1,3,4,4,3,1,2,2,6,5,7,7,7,7,4,6];
let obj={};
arr.forEach((val)=>{
  obj[val]===undefined? obj[val] = 1: obj[val]++
});

let maxfreq=0;
let mostfreq= null;
for(let key in obj){
    if(obj[key]>maxfreq){
        maxfreq=obj[key]
        mostfreq = key
    }
}
console.log(mostfreq,maxfreq)