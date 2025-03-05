// a function should only  be executed once, no matter haow many times its called

function once(fun ){
    excuted = false;
    return function(){
        if(!excuted){
            fun()
            excuted=true;
        }
    }
}


let onceExecuted=once (function(){
    console.log("it will excute only once time")
})

onceExecuted()
onceExecuted()
onceExecuted()
onceExecuted()