let arr = [{teamNAme:"rcb",teamColor:"red"},
    {teamNAme:"srh",teamColor:"orange"},
    {teamNAme:"csk",teamColor:"yellow"},
    {teamNAme:"kkr",teamColor:"blue"},
    {teamNAme:"rr",teamColor:"purpel"},
    {teamNAme:"k11p",teamColor:"green"},
    {teamNAme:"gt",teamColor:"gray"},
    {teamNAme:"mi",teamColor:"skyblue"},
    {teamNAme:"dc",teamColor:"blue"},
    {teamNAme:"lsg",teamColor:"crimson"}

]
let btn = document.querySelector("button")
let content = document.querySelector("p")
btn.addEventListener('click',()=>{
let num = Math.floor(Math.random()*10)

content.textContent = arr[num].teamNAme
content.style.backgroundColor = arr[num].teamColor

})