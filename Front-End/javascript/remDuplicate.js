// we will use set function which is used to remove a duplicate elemnt from an array but it does not retun array it return object.

let arr =[1,1,1,1,44,4,44,44,6,5,33,33]

let arr2 = [...new Set(arr)] // using spred operstor
console.log(arr2)