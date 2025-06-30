 function stepOne(){
   return new Promise((res,rej)=>{
                console.log("step1")
                res()
    })
 }
  function stepTwo(cb){
     return new Promise((res,rej)=>{
                console.log("step2")
                res()
    })
 }
  function stepThree(cb){
    return new Promise((res,rej)=>{
                console.log("step3")
                res()
    })
 }

stepOne().then(stepTwo).then(stepThree).then(()=>{
    console.log("all steps done")
})