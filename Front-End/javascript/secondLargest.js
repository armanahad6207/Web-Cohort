// we will use sort methode


let arr = [10,30,50,6,12,23,15]                         
// remove duplicate value if there

let secondLargest = (arr)=>{
     
  let newArr=[...new Set(arr)].sort((a,b)=>{b-a})
  return newArr.length>1?newArr[1]:null

}

console.log(secondLargest(arr))




