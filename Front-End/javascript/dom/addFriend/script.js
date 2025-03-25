const btn =document.querySelector(".friendbtn");
const friendStatus =document.querySelector(".status")
let flag= 0;
btn.addEventListener("click" , ()=>{
    
    if(flag==0){
        friendStatus.textContent = "we are friends";
  friendStatus.style.color= "blue";
  btn.textContent = "remove friend"
  flag = 1;
}
  else{
    friendStatus.textContent = "stranger";
  friendStatus.style.color= "red";
    btn.textContent = "add friend"

  flag=0;}

  console.log("function calling")
  
  
})