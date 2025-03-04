//  a function can take anoter function as an argument(callback) and execute it after delaying it


function delayedFun(fun){

    setTimeout(fun,3000)


}
delayedFun(function(){
    console.log("print after 3 second")
})

