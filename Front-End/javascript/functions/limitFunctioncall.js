// a function should only be executed a limit number of times. this can be achieved using closures


function setLimit(fun,limit){
 
  let counter =1;
    return function(){
         if(counter<=limit){
            fun()
            counter++
         }
         else{
            console.error("exceded to limit")
         }
    }

}

let limitcounter=setLimit(()=>{
    console.log("this function can be called only 4 times")
},4)

limitcounter()
limitcounter()
limitcounter()
limitcounter()
limitcounter()  // print exceded to limit