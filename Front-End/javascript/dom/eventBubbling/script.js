const cardData = [
  {
    name: "John Doe",
    description: "Frontend Developer & UI Designer.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U=",
    isFriend:"Stranger"
  },
  {
    name: "Jane Smith",
    description: "Marketing Specialist & Content Creator.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U=",
    isFriend:"Stranger"
  },
  {
    name: "Mike Johnson",
    description: "Full Stack Developer with a passion for AI.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U=",
    isFriend:"Stranger"
  },
  {
    name: "Sara Lee",
    description: "UX Designer focused on accessibility.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U="
    ,
    isFriend:"Stranger"
  },
  {
    name: "David Kim",
    description: "DevOps Engineer & Cloud Expert.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U="
    ,
    isFriend:"Stranger"
  },
  {
    name: "Nina Patel",
    description: "Cybersecurity Specialist and Analyst.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U=",
    isFriend:"Stranger"
  },
  {
    name: "Chris Evans",
    description: "Mobile App Developer for iOS & Android.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U=",
    isFriend:"Stranger"
  },
  {
    name: "Aisha Ahmed",
    description: "AI Researcher working on NLP and ML models.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U=",
    isFriend:"Stranger"
  },
  {
    name: "Tom Harris",
    description: "Backend Developer specializing in Node.js.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U=",
    isFriend:"Stranger"
  },
  {
    name: "Emily Clark",
    description: "Data Scientist and visualization expert.",
    image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U=",
    isFriend:"Stranger"
  }
];


let main=document.querySelector("main")
 function renderCard(){
    let add =""

cardData.forEach((data,index)=>{

    add += `<div class="card">
        <img
          src=${data.image}
          alt="Profile Picture"
          class="card-img"
        />
        <div class="card-content">
          <h2>${data.name}</h2>
          <p>${data.description}</p>
          <p>${data.isFriend}</p>
          <button class="add-btn" id= ${index} >Add Friend</button>
        </div>
      </div>`
})

main.innerHTML = add;
 }

 renderCard()



 main.addEventListener("click",(dets)=>{

    
     
    let userData=cardData[dets.target.id]
    if(userData.isFriend === "Stranger"){
        userData.isFriend = "Friends"
        addBtn.textContent = "remove Friend"
        
    }
    else{
        userData.isFriend = "Stranger"
         addBtn.textContent = "Add Friend"
    }
    renderCard()

 })