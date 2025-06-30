 function deliverPizza(){
return new Promise((res,rej)=>{
    setTimeout(()=>{
        let chance = Math.random()>.7
        if(chance) res();
        else rej()
    },2000)
})
 }

 deliverPizza().then(()=>{
    console.log("pizza has  deliverd")
 }).catch(()=>{
    console.error("failed to deliver")
 })