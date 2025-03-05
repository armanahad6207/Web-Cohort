// a call back function is function passed as an argument to another function using setinterval we can execute a call back function repeatdly at specified intervals

function repeatdlyExecute(fun,delay){

  setInterval(fun,delay*1000)


}

repeatdlyExecute(function(){
    console.log("heloo universe!!")
},3)