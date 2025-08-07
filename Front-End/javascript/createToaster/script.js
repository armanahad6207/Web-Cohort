function createToaster(config){

    return function (msg){
        const div= document.createElement("div")
        const tosterCont=document.querySelector(".toaster")
        div.className = `p-4  rounded-xl shadow-orange-600 text-[1.5rem] ${config.theme === "dark" ? "bg-gray-600" :"bg-gray-200"}`
        div.textContent = `${msg}`;
      console.log(div)
    
        tosterCont.appendChild(div);
        console.log(tosterCont)

        setTimeout(()=>{
            tosterCont.removeChild(div)
        },config.duration*1000);
        
    }

}

const toast1 =createToaster({
    positionX:"right",
    positionY:"left",
    theme:"light",
    duration:3 
})

toast1("Registeration succesfull");
setTimeout(()=>{
    toast1("Registeration succesfull2")                             
},1500)