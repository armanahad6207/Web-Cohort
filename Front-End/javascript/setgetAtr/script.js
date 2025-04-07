let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
const btn=  document.querySelector("button");

btn.addEventListener("click",()=>{
    let img1Src = img1.getAttribute('src')
    let img2Src = img2.getAttribute('src')
    img1.setAttribute('src' , img2Src)
    img2.setAttribute('src' , img1Src)
})