//  for reverse an arry we can use reverse methode
let arr = [1,2,3,4,5,6,7]
// console.log(arr.reverse())

// without using reverse method

function reverseArr(arr){

    let reversearr= []
    for(let i = arr.length-1; i>=0 ; i--){

        reversearr.push(arr[i])

    }
    return reversearr
}


console.log(reverseArr(arr))