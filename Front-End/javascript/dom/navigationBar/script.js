let body = document.body
let nav = document.querySelector("#nav")
body.addEventListener("wheel",(dets)=>{
    if(dets.deltaY>0){
        console.log(dets.deltaY)
        nav.classList.add("hideShow")
    }
    else{
         console.log(dets.deltaY)
        nav.classList.remove("hideShow")
    }
   
})